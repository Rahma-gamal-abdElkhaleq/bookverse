import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import HellowContext from "../../component/Context";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase";

function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const { setUser } = useContext(HellowContext);
  const navigate = useNavigate();

  function getErrorMessage(error) {
    switch (error.code) {
      case "auth/email-already-in-use":
        return "This email is already registered. Try logging in instead.";
      case "auth/invalid-email":
        return "Please enter a valid email.";
      case "auth/weak-password":
        return "Password should be at least 6 characters.";
      case "auth/invalid-credential":
      case "auth/wrong-password":
      case "auth/user-not-found":
        return "Incorrect email or password.";
      default:
        return "Something went wrong. Please try again.";
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("");

    if (isSignUp && name.trim().length < 3) {
      setMessage(
        <div className="login-message login-error">
          <i className="bx bx-error-circle"></i>
          Please enter a valid name
        </div>
      );
      return;
    }

    if (!email.includes("@")) {
      setMessage(
        <div className="login-message login-error">
          <i className="bx bx-error-circle"></i>
          Please enter a valid email
        </div>
      );
      return;
    }

    if (password.length < 6) {
      setMessage(
        <div className="login-message login-error">
          <i className="bx bx-error-circle"></i>
          Password must be at least 6 characters
        </div>
      );
      return;
    }

    setLoading(true);

    try {
      let userCredential;

      if (isSignUp) {
        userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, { displayName: name.trim() });
      } else {
        userCredential = await signInWithEmailAndPassword(auth, email, password);
      }

      setUser({ ...userCredential.user });

      setMessage(
        <div className="login-message login-success">
          <i className="bx bx-check-circle"></i>
          Welcome {userCredential.user.displayName || ""}, Enjoy your BookVerse journey
        </div>
      );

      setTimeout(() => navigate("/"), 800);
    } catch (error) {
      setMessage(
        <div className="login-message login-error">
          <i className="bx bx-error-circle"></i>
          {getErrorMessage(error)}
        </div>
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bookverse-login-page">
      <form className="bookverse-login-card" onSubmit={handleSubmit}>
        <h2 className="bookverse-login-title">
          <i className="bx bx-book-open"></i>
          {isSignUp ? "Create Your BookVerse Account" : "Welcome To BookVerse"}
        </h2>

        <p className="bookverse-login-subtitle">
          {isSignUp ? "Sign up to save your favorite books" : "Discover your next favorite book"}
        </p>

        {isSignUp && (
          <input
            className="bookverse-login-input"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}

        <input
          className="bookverse-login-input"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="bookverse-login-input"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="bookverse-login-button" disabled={loading}>
          <i className="bx bx-log-in"></i>
          {loading ? "Please wait..." : isSignUp ? "Sign Up" : "Enter BookVerse"}
        </button>

        {message}

        <p className="text-center mt-3" style={{ cursor: "pointer" }}>
          {isSignUp ? "Already have an account? " : "Don't have an account? "}
          <span
            style={{ color: "#0b4fd9", fontWeight: "600" }}
            onClick={() => {
              setIsSignUp(!isSignUp);
              setMessage("");
            }}
          >
            {isSignUp ? "Log In" : "Sign Up"}
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;