import { useState, useEffect } from "react";
import Header from "../component/Header/Header";
import SearchForm from "../component/SearchForm/SearchForm";
import BookList from "../component/BookList/BookList";
import TrendingCategories from "../component/TrendingCategories/TrendingCategories";
import WhyChoose from "../component/whyChoos/WhyChoose";
import FeaturedAuthors from "../component/FeaturedAuthors/FeaturedAuthors";
import Newsletter from "../component/Newsletter/Newsletter";
import Footer from "../component/Footer/Footer";
import { useFavorites } from "../hooks/useFavorites";

function Home() {
  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("40");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  const [startIndex, setStartIndex] = useState(0);

  const [favorites, setFavorites] = useFavorites();

  useEffect(() => {
    if (!searchTerm.trim()) return;

    const controller = new AbortController();
    let ignore = false;

    // دالة بتحاول تعمل fetch، ولو رجع 503 بتعيد المحاولة تاني بعد فترة انتظار متزايدة
    const fetchWithRetry = async (url, retries = 3, delay = 1000) => {
      for (let i = 0; i <= retries; i++) {
        const response = await fetch(url, { signal: controller.signal });

        if (response.status === 503 && i < retries) {
          console.warn(`503 received, retrying... attempt ${i + 1}`);
          await new Promise((res) => setTimeout(res, delay * (i + 1)));
          continue;
        }

        return response;
      }
    };

    const fetchBooks = async () => {
      setLoading(true);

      try {
        const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchTerm)}&startIndex=${startIndex}&maxResults=10&key=${process.env.REACT_APP_GOOGLE_BOOKS_API_KEY}`;

        console.log("==================================");
        console.log("URL:", url);

        const response = await fetchWithRetry(url);

        console.log("Status:", response.status);

        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();

        if (ignore) return; // لو الطلب ده بقى قديم (searchTerm/startIndex اتغيروا) نتجاهله

        console.log(data);

        setTotalItems(data.totalItems || 0);

        if (startIndex === 0) {
          setBooks(data.items || []);
        } else {
          setBooks((prevBooks) => [
            ...prevBooks,
            ...(data.items || []),
          ]);
        }
      } catch (error) {
        if (ignore) return;

        if (error.name === "AbortError") {
          // الطلب اتلغى (مثلاً الكومبوننت اتشال أو طلب جديد بدأ)، متجاهلش
          return;
        }

        console.error(error);

        if (error instanceof Error) {
          alert(
            error.message.includes("503")
              ? "Please Try Again"
              : error.message
          );
        } else {
          alert("Something went wrong");
        }
      } finally {
        if (!ignore) setLoading(false);
      }
    };

    fetchBooks();

    return () => {
      ignore = true;
      controller.abort();
    };
  }, [searchTerm, startIndex]);

  return (
    <>
      <Header />

      <SearchForm
        query={query}
        setQuery={setQuery}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        loading={loading}
        setLoading={setLoading}
        hasSearched={hasSearched}
        setHasSearched={setHasSearched}
        startIndex={startIndex}
        setStartIndex={setStartIndex}
      />

      <BookList
        books={books}
        favorites={favorites}
        setFavorites={setFavorites}
        hasSearched={hasSearched}
      />

      {books.length < totalItems && books.length > 0 && (
        <div className="text-center my-4">
          <button
            className="btn btn-outline-primary px-4"
            onClick={() => setStartIndex((prev) => prev + 10)}
            disabled={loading}
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}

       <TrendingCategories
    setQuery={setQuery}
    setSearchTerm={setSearchTerm}
    setStartIndex={setStartIndex}
    setHasSearched={setHasSearched}
/>
<WhyChoose />

<FeaturedAuthors
    setQuery={setQuery}
    setSearchTerm={setSearchTerm}
    setStartIndex={setStartIndex}
    setHasSearched={setHasSearched}
/>
<Newsletter />
<Footer />
    </>
  );
}

export default Home;