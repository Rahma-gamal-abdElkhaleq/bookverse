import "./FeaturedAuthors.css";

function FeaturedAuthors({
  setQuery,
  setSearchTerm,
  setStartIndex,
  setHasSearched,
}) {

  const authors = [
    {
      name: "J.K. Rowling",
      category: "Fantasy Author",
      icon: "bx bxs-user-circle",
      color: "#7C3AED",
    },
    {
      name: "Stephen King",
      category: "Horror Author",
      icon: "bx bxs-user-circle",
      color: "#EF4444",
    },
    {
      name: "George Orwell",
      category: "Classic Author",
      icon: "bx bxs-user-circle",
      color: "#0EA5E9",
    },
    {
      name: "Jane Austen",
      category: "Romance Author",
      icon: "bx bxs-user-circle",
      color: "#F59E0B",
    },
  ];

  const handleAuthor = (author) => {

    setQuery(author);

    setSearchTerm(author);

    setStartIndex(0);

    setHasSearched(true);

    window.scrollTo({
      top: 420,
      behavior: "smooth",
    });

  };

  return (

    <section className="authors-section container">

      <h2 className="authors-title">

        Meet Popular Authors

      </h2>

      <p className="authors-subtitle">

        Explore books written by some of the world's most loved authors.

      </p>

      <div className="authors-grid">

        {

          authors.map((author, index) => (

            <div
              className="author-card"
              key={index}
            >

              <div
                className="author-avatar"
                style={{
                  backgroundColor: `${author.color}20`
                }}
              >

                <i
                  className={author.icon}
                  style={{
                    color: author.color
                  }}
                ></i>

              </div>

              <h4>

                {author.name}

              </h4>

              <span>

                {author.category}

              </span>

              <button
                className="btn btn-primary mt-4"
                onClick={() => handleAuthor(author.name)}
              >

                Explore Books

              </button>

            </div>

          ))

        }

      </div>

    </section>

  );

}

export default FeaturedAuthors;