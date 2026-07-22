import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./BookList.css";
import BookCard from "../BookCard/BookCard";
function BookList({books, favorites , setFavorites , hasSearched}){
   


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

//  لو بحث بنتائج غلط 
   if (hasSearched && books.length === 0) {
    return (
        <div className="container" style={{ marginTop: "180px" }}>
            <div className="text-center">
                <h2>🔍 No Books Found</h2>
                <p className="text-muted">
                    Try searching with another keyword.
                </p>
            </div>
        </div>
    );
}

         
    return(
        <>
  
     <div className="container" style={{ marginTop: "200px" }}>
  <div className="row gx-4 gy-4">
    {books.map((book) => (
      <BookCard key={book.id} book={book} 
      favorites={favorites}
      setFavorites={setFavorites}
      
      />
    ))}
  </div>
</div>


  </>    
    )

}
export default BookList