import React from "react";
import premiumIcon from "../../../images/premium icon.webp";
import premiumBg from "../../../images/premium b.webp";
import logo from "../../../images/header logo.webp";
import "./NavBar.css"

function NavBar() {
    return (
        <div className="container-fluid p-0">
            <nav className="navbar navbar-expand-lg bg-light">

                <ul className="navbar-nav me-auto mb-2 mb-lg-0 h-100 w-100 d-flex justify-content-between">
                    <div className="d-flex">
                        <li className="nav-item px-4">
                            <a className="nav-link active h-100 d-flex align-items-center"
                                href="">Plans</a>
                        </li>
                        <li className="nav-item px-4">
                            <a className="nav-link active h-100 d-flex align-items-center"
                                href="">About us</a>
                        </li>
                    </div>
                    <li className="nav-item h-100">
                        <a className="nav-link active p h-100" href="" rel="home">
                            <img className="h-100" src={logo} alt="logo"/>
                        </a>
                    </li>
                    <li className="nav-item position-relative" id="premiumBtn">
                        <a className="nav-link active h-100" href="">
                            <img className="h-100" src={premiumBg} alt="premium"/>
                                <div className="position-absolute">
                                    <img src={premiumIcon} alt="crown" className="crown-icon"/>
                                        <p className="m-0 px-2">Premium zone</p>
                                </div>
                        </a>
                    </li>
                </ul>

            </nav>
        </div>
    );
}

export default NavBar;