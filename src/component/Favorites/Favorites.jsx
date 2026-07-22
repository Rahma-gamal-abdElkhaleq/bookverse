import BookCard from "../BookCard/BookCard";
import { useFavorites } from "../../hooks/useFavorites";
import "./Favorites.css";

function Favorites() {
  const [favorites, setFavorites] = useFavorites();

  return (
    <div className="favorites-page">
      <div className="favorites-container">
        <h2 className="favorites-title">
          <i className="bx bxs-heart"></i>
          My Favorite Books
        </h2>

        {favorites.length === 0 ? (
          <div className="empty-favorite">
            <i className="bx bx-book-heart empty-icon"></i>
            <h4>No favorite books yet</h4>
            <p>Start exploring books and save your favorites.</p>
          </div>
        ) : (
          <div className="row g-4 justify-content-center">
            {favorites.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                favorites={favorites}
                setFavorites={setFavorites}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Favorites;