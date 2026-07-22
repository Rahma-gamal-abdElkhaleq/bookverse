
import "./HowItWorks.css";

function HowItWorks() {

  const steps = [

    {
      icon: "bx bx-search-alt",
      title: "Search",
      text: "Search any book instantly by title, author, or category."
    },

    {
      icon: "bx bx-book-open",
      title: "Discover",
      text: "Explore millions of books available through Google Books."
    },

    {
      icon: "bx bxs-heart",
      title: "Save",
      text: "Keep your favorite books in your personal collection."
    }

  ];

  return (

    <section className="how-section">

      <div className="container">

        <div className="section-title">

          <span>HOW IT WORKS</span>

          <h2>Start Reading in 3 Simple Steps</h2>

          <p>

            Finding your next favorite book has never been easier.

          </p>

        </div>

        <div className="row g-4">

          {steps.map((step, index) => (

            
<div className="col-lg-4 position-relative" key={index}>

    <div className="how-card">

        <div className="step-number">
            0{index + 1}
        </div>

        <div className="how-icon">
            <i className={step.icon}></i>
        </div>

        <h4>{step.title}</h4>

        <p>{step.text}</p>

    </div>

    {index !== steps.length - 1 && (

        <div className="how-arrow">

            <i className="bx bx-right-arrow-alt"></i>

        </div>

    )}

</div>



          ))}

        </div>

      </div>

    </section>

  );

}

export default HowItWorks;

