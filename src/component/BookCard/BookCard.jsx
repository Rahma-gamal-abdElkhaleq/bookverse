import "./BookCard.css";
import { Link } from "react-router-dom";

function BookCard({ book,favorites,setFavorites }) {
  const isFavorite = favorites.some((item) => item.id === book.id);
  const toggleFavorite = () => {
  if (isFavorite) {
    // حذف الكتاب من المفضلة
    setFavorites(favorites.filter((item) => item.id !== book.id));
  } else {
    // إضافة الكتاب إلى المفضلة
    setFavorites([...favorites, book]);
  }
};
  return (
  <div className="col-12 col-sm-6 col-md-4 col-lg-3">
    <div className="card h-100">

      <img
        className="card-img-top"
        src={
          book.volumeInfo.imageLinks?.thumbnail ||
          "/images/no-image.png"
        }
        alt={book.volumeInfo.title}
      />

      <div className="card-body">

        <h5 className="card-title">
          {book.volumeInfo.title}
        </h5>

        <p className="author">
          <i className="bx bx-user"></i>
          {" "}
          {book.volumeInfo.authors?.join(", ") || "Unknown Author"}
        </p>

        <p className="category">
          <i className="bx bx-category"></i>
          {" "}
          {book.volumeInfo.categories?.join(", ") || "Unknown Category"}
        </p>

        <p className="rating">
          <i className="bx bxs-star"></i>
          {" "}
          {book.volumeInfo.averageRating || "No Rating"}
        </p>

        <p className="date">
          <i className="bx bx-calendar"></i>
          {" "}
          {book.volumeInfo.publishedDate || "Unknown Date"}
        </p>

        <button
          className={`btn ${
            isFavorite ? "btn-danger" : "btn-outline-danger"
          } w-100 mb-2`}
          onClick={toggleFavorite}
        >
          <i
            className={`bx ${
              isFavorite ? "bxs-heart" : "bx-heart"
            } me-2`}
          ></i>

          {isFavorite ? "Saved" : "Save"}
        </button>

        <Link
          to={`/BookDetails/${book.id}`}
          className="btn btn-primary"
        >
          <i className="bx bx-show me-2"></i>
          View Details
        </Link>

      </div>

    </div>
  </div>
);
}

export default BookCard;