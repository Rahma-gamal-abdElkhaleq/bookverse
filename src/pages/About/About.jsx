
import "./About.css";
import AboutFeatures from "../About/AboutFeatures";
// import FireflyBackground from "./FireflyBackground";
import { Link } from "react-router-dom";
import MissionSection from "./MissionSection";
import AboutImage from "../../Images/About.jpg";
import HowItWorks from "./HowItWorks";
import Footer from "../../component/Footer/Footer";

function About() {
  return (
    <>

      <div className="about-page">


        <section className="about-hero">
          <div className="hero-background">
             <span className="blur-circle circle1"></span>
              <span className="blur-circle circle2"></span>
               <span className="blur-circle circle3"></span> 
               </div>

          <div className="container">

            <div className="row align-items-center">

              <div className="col-lg-6">

                <span className="about-tag">
                  <i className="bx bx-book-open" style={{fontSize:"Large"}}></i> About BookVerse
                </span>

                <h1>
                  Discover Your
                  <br />
                  Next Favorite
                  <br />
                  Book
                </h1>

                <p>
                  BookVerse helps you discover millions of books through the
                  Google Books API. Search by title, author, or category,
                  save your favorite books, and enjoy reading anytime.
                </p>

                <div className="about-buttons">

                  <Link to="/" className="btn btn-primary btn-lg">
                    Explore Books
                  </Link>

                  <a
                    href="#about-content"
                    className="btn btn-outline-light btn-lg"
                  >
                    Learn More
                  </a>

                </div>

              </div>

              <div className="col-lg-6 text-center">

                <img
                  src={AboutImage}
                  alt="BookVerse"
                  className="about-hero-image"
                />

              </div>

            </div>

          </div>

        </section>

      </div>

      <AboutFeatures />

      <MissionSection />

      <HowItWorks />

      <Footer />

    </>
  );
}

export default About;

