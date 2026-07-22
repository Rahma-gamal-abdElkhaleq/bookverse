import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {

    return (

        <footer className="footer">

            <div className="container">

                <div className="footer-grid">

                    <div>

                        <h2 className="footer-logo">

                            <i className="bx bxs-book-heart"></i>

                            BookVerse

                        </h2>

                        <p>

                            Search millions of books and discover your next
                            favorite read with BookVerse.

                        </p>

                    </div>

                    <div>

                        <h4>

                            Quick Links

                        </h4>

                        <ul>

                          <Link to={"/"} className="nav-link active"><li>Home</li></Link>  

                           <Link to={"/About"} className="nav-link active"><li>About</li></Link>

                            <Link to={"/Favorites"} className="nav-link active"><li>Favourits</li></Link>

                        </ul>

                    </div>

                    <div>

                        <h4>

                            Categories

                        </h4>

                        <ul>

                            <li>Programming</li>

                            <li>Science</li>

                            <li>History</li>

                            <li>Business</li>

                        </ul>

                    </div>

                    <div>

                        <h4>

                            Contact

                        </h4>

                        <ul>

                            <li>hello@bookverse.com</li>

                            <li>Egypt</li>

                        </ul>

                    </div>

                </div>

                <div className="footer-social">

                    <a href="/"><i className="bx bxl-facebook"></i></a>

                    <a href="/"><i className="bx bxl-github"></i></a>

                    <a href="/"><i className="bx bxl-linkedin"></i></a>

                    <a href="/"><i className="bx bxl-instagram"></i></a>

                </div>

               <div className="footer-bottom">

    © 2026 BookVerse. All Rights Reserved.

    <br />

    Made with <i className="bx bxs-heart footer-heart"></i> using React

</div>

            </div>

        </footer>

    );

}

export default Footer;