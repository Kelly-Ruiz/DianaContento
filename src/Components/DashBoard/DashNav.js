import React from 'react'
import logo from "../../images/header logo.webp";
import { Login } from '../NavBar/Components/Login/Login';

function DashNav() {
    return (
        <div className="flex justify-center bg-white w-full z-40">
            <nav className="h-18 w-[70rem] ">


                <ul className="py-2 w-full h-full px-4 flex justify-between items-center">
                    <div className="flex items-center uppercase font-semibold text-gray-600">
                        <li className="mr-4">
                            <a className="h-10" href="/" rel="home">
                                <img className="h-14" src={logo} alt="logo" />
                            </a>
                        </li>
                        <a className="h-14 flex items-center"
                            href="/plans"
                        >
                            <li className="w-28 h-full flex justify-center items-center hover:bg-[#00000020] rounded-xl transition-all duration-400">
                                Plans
                            </li>
                        </a>
                        <a className="h-14 flex items-center"
                            href="/Aboutus">
                            <li className="w-28 h-full flex items-center justify-center hover:bg-[#00000020] rounded-xl transition-all duration-400">
                                About us
                            </li>
                        </a>
                    </div>
                    <li id="premiumBtn">

                       
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default DashNav