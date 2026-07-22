import logo from './Images/Logo.webp';
import './App.css';
import { Navbar } from './component/Navbar/Navbar';
import Home from './Home/Home'
import { Layout } from './LayOut';
import About from "./pages/About/About"
import { useState, useEffect } from 'react';
import Login from './pages/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'boxicons/css/boxicons.min.css';
import BookDetails from './component/BookDetails/BookDetails';
import HellowContext from './component/Context'
import Favorites from './component/Favorites/Favorites';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  let x = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/About", element: <About /> },
        { path: "/Login", element: <Login /> },
        { path: "/BookDetails/:id", element: <BookDetails /> },
        { path: "/Favorites", element: <Favorites /> }
      ]
    }
  ]);

  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (authLoading) {
    return (
      <div className="text-center mt-5">
        <h3>Loading...</h3>
      </div>
    );
  }

  return (
    <>
      <HellowContext.Provider value={{ user, setUser }}>
        <RouterProvider router={x} />
      </HellowContext.Provider>
    </>
  );
}

export default App;