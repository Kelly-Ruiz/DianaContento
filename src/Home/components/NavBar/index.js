import React from "react";
import premiumIcon from "../../../images/premium icon.webp";
import premiumBg from "../../../images/premium b.webp";
import logo from "../../../images/header logo.webp";
import logoBlanco from "../../../images/WhiteLogo.png";
import "./NavBar.css"

function NavBar({ transparent }) {
    return (
        <div className={`p-0 z-40 ${transparent ? "absolute top-0 left-0 w-full bg-TransparentColor text-white" : "bg-white"}`}>
            <nav className="p-2">
                <ul className="mb-2 h-full w-full flex justify-between">
                    <div className="flex justify-start">
                        {
                            transparent &&
                            <li className="h-full px-5">
                                <a className="active h-full" href="" rel="home">
                                    <img className="h-full" src={logoBlanco} alt="logo" />
                                </a>
                            </li>
                        }
                        <li className={`${transparent ? "hover:bg-[#00B2AA]" : "hover:bg-slate-100"} rounded-lg transition duration-500`}>
                            <a className="h-full px-4 flex justify-center items-center" href="">
                                Plans
                            </a>
                        </li>
                        <li className={`${transparent ? "hover:bg-[#00B2AA]" : "hover:bg-slate-100"} rounded-lg transition duration-500`}>
                            <a className="h-full px-4 flex justify-center items-center" href="">
                                About us
                            </a>
                        </li>
                    </div>
                    {
                        !transparent &&
                        <li className="h-full">
                            <a className="active h-full" href="" rel="home">
                                <img className="h-full" src={logo} alt="logo" />
                            </a>
                        </li>
                    }
                    <li className=" relative" id="premiumBtn">
                        <a className="active h-full" href="">
                            <img className="h-full" src={premiumBg} alt="premium" />
                            <div className="absolute">
                                <img src={premiumIcon} alt="crown" className="crown-icon" />
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