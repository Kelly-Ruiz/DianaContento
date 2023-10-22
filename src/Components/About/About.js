import React from "react";
import { VideoH } from "./Components/VideoH/VideoH";
import { Information } from "./Components/Information/Information";
import { Footer } from "../Footer/index";
import { NavBar } from "../NavBar";

import './About.css';

function About() {
    return (
        <>
            <NavBar />
            <VideoH />
            <Information />
            <Footer />
        </>
    );
}

export { About };