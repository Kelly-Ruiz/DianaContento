import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../Firebase/firebase";
import React from "react";

import { Login } from "./Components/Login/Login";
import logo from "../../images/header logo.webp";
import "./NavBar.css"


function NavBar() {
    const user = auth.currentUser
    console.log("User", user);

    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
          console.log ("user Sign in" ,user)
          // ...
        } else {
          // User is signed out
          console.log ("user Sign out" ,user)
          // ...
        }
      });

    function anySignOut() {
        signOut(auth).then(() => {
            console.log("Sign-out successful.")
            // Sign-out successful.
        }).catch((error) => {
            console.log(error)
            // An error happened.
        });
    }

    return (
        <div className="container-fluid p-0">
            <nav className="navbar navbar-expand-lg bg-light">

                {!user && // SIN USUARIO LOGEADO
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 h-100 w-100 d-flex justify-content-between">
                        <div className="d-flex">
                            <li className="nav-item px-4">
                                <a className="nav-link active h-100 d-flex align-items-center"
                                    href="/">Plans</a>
                            </li>
                            <li className="nav-item px-4">
                                <a className="nav-link active h-100 d-flex align-items-center"
                                    href="/Aboutus">About us</a>
                            </li>
                        </div>
                        <li className="nav-item h-100">
                            <a className="nav-link active p h-100" href="/" rel="home">
                                <img className="h-100" src={logo} alt="logo" />
                            </a>
                        </li>
                        <li className="nav-item position-relative" id="premiumBtn">
                            <Login />
                        </li>
                    </ul>
                }

                {user &&
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 h-100 w-100 d-flex justify-content-between">
                <div className="d-flex">
                    <li className="nav-item px-4">
                        <a className="nav-link active h-100 d-flex align-items-center"
                            href="">Plans</a>
                    </li>
                    <li className="nav-item px-4">
                        <a className="nav-link active h-100 d-flex align-items-center"
                            href="/Aboutus">About us</a>
                    </li>
                </div>
                <li className="nav-item h-100">
                    <a className="nav-link active p h-100" href="/" rel="home">
                        <img className="h-100" src={logo} alt="logo" />
                    </a>
                </li>
                <li className="nav-item position-relative" id="premiumBtn">
                    
                <button onClick={anySignOut}>Log out</button>
                </li>
            </ul>
                }
            </nav>
        </div>
    );
}

export { NavBar };