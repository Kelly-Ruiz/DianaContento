import React from "react";
import { Information } from "./Components/Information/Information";
import { Footer } from "../Footer/index";
import { NavBar } from "../NavBar";

import './About.css';
import { Reviews } from "./Components/VideoH/Reviews";

function About() {
    return (
        <>
            <NavBar />
            <Reviews />
            <Information />
            <Footer />
        </>
    );
}

export { About };