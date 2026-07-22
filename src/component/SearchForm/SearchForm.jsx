import "../SearchForm/SearchForm.css"

import { useEffect } from "react";
function SearchForm({ query, setQuery, searchTerm, setSearchTerm, loading, setLoading, setHasSearched, startIndex, setStartIndex }) {

  // Animation
  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll(".fade-card");

      cards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (cardTop < windowHeight - 100) {
          card.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearch = () => {
    if (query.trim() === "") return;

    setLoading(true);
    setStartIndex(0);
    setSearchTerm(query);
  };

  return (
    <>
      <div className="input-group">
        <input
          type="text"
          className="form-control shadow-lg"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
              setHasSearched(true);
            }
          }}
        />
        <button
          className="btn btn-primary"
          onClick={handleSearch}
          disabled={loading}
        >
          {loading ? (
            <>
              <span
                className="spinner-border spinner-border-sm me-2"
                role="status"
                aria-hidden="true"
              ></span>
              Searching...
            </>
          ) : (
            <>
              <i className="bx bx-search me-2"></i>
              Search
            </>
          )}
        </button>
      </div>
    </>
  );
}
export default SearchForm;