import { Link, useNavigate } from "react-router-dom";
import logo from '../../Images/Logo.webp'
import { HellowContext } from "../Context";
import { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import './Navbar.css';
import 'boxicons/css/boxicons.min.css';

export function Navbar(){
  const { user, setUser } = useContext(HellowContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    navigate("/");
  };

  return(
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top ">
        <div className="container-fluid">
          <Link className="navbar-brand " to={"/"}><h1><img src={logo} width="70px" height="70px" className="rounded-circle" alt="BookVerse Logo" /></h1></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" to={"/"}>Home</Link>
              <Link className="nav-link" to={"/About"}>About</Link>
              <Link className="nav-link" to="/Favorites"> Favorites <i className="bx bx-heart footer-heart"></i> </Link>

              {user ? (
                <Link className="nav-link" to={"/"} onClick={handleLogout}>
                  Logout
                </Link>
              ) : (
                <Link className="nav-link" to={"/Login"}>Login</Link>
              )}
            </div>

            {user && (
              <span className="hellow ms-auto" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                {`Hi ! ${user.displayName || user.email}`}
                <i className="bx bx-smile" aria-hidden="true" style={{ fontSize: "1.2em", color: "#1a3d8f" }} />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}