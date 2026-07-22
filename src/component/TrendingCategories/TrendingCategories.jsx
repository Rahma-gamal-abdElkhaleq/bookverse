import "./TrendingCategories.css";

function TrendingCategories({
  setQuery,
  setSearchTerm,
  setStartIndex,
  setHasSearched,
}) {

  const categories = [
    {
      icon: "bx bx-code-alt",
      title: "Programming",
      color: "#6f42c1",
    },
    {
      icon: "bx bx-book-open",
      title: "Fiction",
      color: "#fd7e14",
    },
    {
      icon: "bx bx-test-tube",
      title: "Science",
      color: "#20c997",
    },
    {
      icon: "bx bx-briefcase",
      title: "Business",
      color: "#0d6efd",
    },
    {
      icon: "bx bx-heart",
      title: "Romance",
      color: "#e83e8c",
    },
    {
      icon: "bx bx-search-alt",
      title: "Mystery",
      color: "#dc3545",
    },
    {
      icon: "bx bx-world",
      title: "History",
      color: "#198754",
    },
    {
      icon: "bx bx-palette",
      title: "Art",
      color: "#ffc107",
    },
    {
      icon: "bx bx-chip",
      title: "Technology",
      color: "#6610f2",
    },
    {
      icon: "bx bx-leaf",
      title: "Health",
      color: "#28a745",
    },
  ];

  const handleCategoryClick = (category) => {

    setQuery(category);

    setSearchTerm(category);

    setStartIndex(0);

    setHasSearched(true);

    window.scrollTo({
      top: 420,
      behavior: "smooth",
    });

  };

  return (

    <section className="categories-section container">

      <h2 className="categories-title">
        Explore by Category
      </h2>

      <p className="categories-subtitle">
        Find your next favorite book with one click.
      </p>

      <div className="categories-grid">

        {categories.map((category, index) => (

          <div
            key={index}
            className="category-card"
            onClick={() => handleCategoryClick(category.title)}
          >

            <div
              className="icon-wrapper"
              style={{
                backgroundColor: `${category.color}15`,
              }}
            >

              <i
                className={`${category.icon} category-icon`}
                style={{
                  color: category.color,
                }}
              ></i>

            </div>

            <h5>{category.title}</h5>

          </div>

        ))}

      </div>

    </section>

  );
}

export default TrendingCategories;