import "./AboutFeatures.css";

function AboutFeatures() {
  const features = [
    {
      icon: "bx bx-library",
      title: "Millions of Books",
      text: "Discover millions of books from the Google Books library across every genre."
    },
    {
      icon: "bx bx-heart",
      title: "Save Favorites",
      text: "Create your personal reading collection and access your favorite books anytime."
    },
    {
      icon: "bx bx-search-alt",
      title: "Smart Search",
      text: "Quickly find books by title, author, category, or keywords."
    },
    {
      icon: "bx bx-bolt-circle",
      title: "Fast Experience",
      text: "Built with React to provide a fast, smooth, and enjoyable browsing experience."
    }
  ];

  return (
    <section className="about-features">

      <div className="container">

        <div className="section-title">

          <span>WHY BOOKVERSE</span>

          <h2>Why Readers Love BookVerse</h2>

          <p>
            Everything you need to discover, organize, and enjoy your reading journey.
          </p>

        </div>

        <div className="row g-4">

          {features.map((feature, index) => (

            <div className="col-lg-3 col-md-6" key={index}>

              <div className="about-feature-card">

                <div className="about-feature-icon">
                  <i className={feature.icon}></i>
                </div>

                <h4 className="about-feature-title">
                  {feature.title}
                </h4>

                <p className="about-feature-text">
                  {feature.text}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default AboutFeatures;