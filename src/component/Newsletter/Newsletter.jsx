import "./Newsletter.css";

function Newsletter() {
  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-box">

         <h2 className="newsletter-title">
    <i className="bx bxs-book-heart"></i>
    Stay Updated
</h2>

          <p>
            Get personalized book recommendations and discover new releases every
            week.
          </p>

          <form
            className="newsletter-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
            />

            <button type="submit">
              Subscribe
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}

export default Newsletter;