import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./BookDetails.css"

function BookDetails(){
   console.log("BookDetails Rendered");
    const {id}=useParams();
    console.log(id);
    let [book,setBook]=useState(null)
    useEffect(() => {
    const details = async () => {
        try {
            const req = await axios.get(
  `https://www.googleapis.com/books/v1/volumes/${id}?key=${process.env.REACT_APP_GOOGLE_BOOKS_API_KEY}`
)

            setBook(req.data.volumeInfo);
        } catch (error) {
            console.log(error);
        }
    };

    details();
}, [id]);
         console.log(id)

   return (
  <>
    {!book ? (
      <h2 className="text-center mt-5">Loading...</h2>
    ) : (
      <div
        style={{
          background:
            "radial-gradient(circle at top left, #3b82f6, transparent 35%), radial-gradient(circle at bottom right, #1e40af, transparent 40%), linear-gradient(135deg, #0b3c91, #061b45)",
          minHeight: "100vh",
          paddingTop: "170px",
          paddingBottom: "50px",
        }}
      >
        <div className="container">
          <div
            className="card shadow-lg border-0"
            style={{ maxWidth: "900px", margin: "auto", borderRadius: "20px", overflow: "hidden" }}
          >
            <div className="row g-0">

              {/* Book Image */}
              <div className="col-md-4">
                <img
                  src={
                    book.imageLinks?.thumbnail?.replace("http://", "https://") ||
                    "/images/no-image.png"
                  }
                  alt={book.title}
                  className="img-fluid book-cover-img"
                />
              </div>

              {/* Book Information */}
              <div
                className="col-md-8"
                style={{
                  background: "linear-gradient(135deg, #ffffff, #eaf3ff 60%, #d8e8ff)",
                }}
              >
                <div className="card-body p-4">

                  <h2 className="fw-bold mb-4" style={{ color: "#0b4fd9" }}>
                    {book.title}
                  </h2>

                  <p>
                    <strong style={{ color: "#0b4fd9" }}>
                      <i className="bx bx-user me-1"></i> Author:
                    </strong>{" "}
                    {book.authors?.join(", ") || "Unknown Author"}
                  </p>

                  <p>
                    <strong style={{ color: "#0b4fd9" }}>
                      <i className="bx bx-category me-1"></i> Category:
                    </strong>{" "}
                    {book.categories?.join(", ") || "Unknown Category"}
                  </p>

                  <p>
                    <strong style={{ color: "#0b4fd9" }}>
                      <i className="bx bx-buildings me-1"></i> Publisher:
                    </strong>{" "}
                    {book.publisher || "Unknown"}
                  </p>

                  <p>
                    <strong style={{ color: "#0b4fd9" }}>
                      <i className="bx bx-calendar me-1"></i> Published Date:
                    </strong>{" "}
                    {book.publishedDate || "Unknown"}
                  </p>

                  <p>
                    <strong style={{ color: "#0b4fd9" }}>
                      <i className="bx bx-file me-1"></i> Pages:
                    </strong>{" "}
                    {book.pageCount || "Unknown"}
                  </p>

                  <p>
                    <strong style={{ color: "#0b4fd9" }}>
                      <i className="bx bx-globe me-1"></i> Language:
                    </strong>{" "}
                    {book.language?.toUpperCase() || "Unknown"}
                  </p>

                  <p>
                    <strong style={{ color: "#0b4fd9" }}>
                      <i className="bx bxs-star me-1" style={{ color: "#f5b400" }}></i> Rating:
                    </strong>{" "}
                    {book.averageRating || "No Rating"} (
                    {book.ratingsCount || 0} Reviews)
                  </p>

                  <hr />

                  <h5 style={{ color: "#0b4fd9" }}>Description</h5>

                  <div
  style={{ textAlign: "justify" }}
  dangerouslySetInnerHTML={{
    __html: book.description || "No description available."
  }}
/>

                  <a
                    href={book.previewLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn mt-3"
                    style={{
                      background: "#0b4fd9",
                      color: "#ffffff",
                      border: "none",
                      fontWeight: "600",
                    }}
                  >
                    <i className="bx bx-book-open me-1"></i> Read Preview
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </>
);
}

export default BookDetails;