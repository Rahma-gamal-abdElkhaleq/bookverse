import "../Header/head.css";

function Header() {
  return (
    <div className="Header">
      <div className="header-content">

        <i className='bx bxs-book-bookmark'></i>

        <h1>BookVerse</h1>

        <h2>Discover Your Next Favorite Book</h2>

        <p>
          Explore millions of books from Google Books.
          Search by title, author, or category in seconds.
        </p>

        <div className="stats">
          <div className="stat">
            <h3>10M+</h3>
            <span>Books</span>
          </div>

          <div className="stat">
            <h3>100K+</h3>
            <span>Authors</span>
          </div>

          <div className="stat">
            <h3>Free</h3>
            <span>Access</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Header;