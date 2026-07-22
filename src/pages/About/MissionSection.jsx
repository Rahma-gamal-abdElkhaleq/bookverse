

import { Link } from "react-router-dom";
import "./MissionSection.css";

import MissionImage from "../../Images/About-4.jpg";

function MissionSection() {

  return (

    <section className="mission-section">

      <div className="container">

        <div className="row align-items-center gy-5">

          {/* Image */}

          <div className="col-lg-6">

            <div className="mission-image-box">

              <img
                src={MissionImage}
                alt="Our Mission"
                className="mission-image"
              />

            </div>

          </div>

          {/* Content */}

          <div className="col-lg-6">

            <span className="mission-tag">
              OUR MISSION
            </span>

            <h2 className="mission-title">
              Making Knowledge Accessible
              <br />
              For Everyone
            </h2>

            <p className="mission-text">
              BookVerse was created to make discovering books easier than ever.
              Whether you're searching for academic resources, novels, science,
              or business books, our platform helps you find the perfect book
              within seconds using the Google Books API.
            </p>

            <div className="mission-list">

              <div className="mission-item">
                <i className="bx bx-check-circle"></i>
                <span>Millions of Books Available</span>
              </div>

              <div className="mission-item">
                <i className="bx bx-check-circle"></i>
                <span>Fast & Smart Search</span>
              </div>

              <div className="mission-item">
                <i className="bx bx-check-circle"></i>
                <span>Save Your Favorite Books</span>
              </div>

              <div className="mission-item">
                <i className="bx bx-check-circle"></i>
                <span>Modern Reading Experience</span>
              </div>

            </div>

            <Link
              to="/"
              className="btn btn-primary mission-btn"
            >
              Explore Books
            </Link>

          </div>

        </div>

      </div>

    </section>

  );

}

export default MissionSection;

