import React from "react";
import { Information } from "./Components/Information/Information";
import { Footer } from "../Footer/index";
import { NavBar } from "../NavBar";

import './Plans.css';
import { Reviews } from "./Components/VideoH/Reviews";

function Plans() {
    return (
        <>
            <NavBar />
            <Reviews />
            <Information />
            <Footer />
        </>
    );
}

export { Plans };