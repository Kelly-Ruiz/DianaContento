import React from "react";
import { Information } from "./Components/Information/Information";
import { Footer } from "../Footer/index";
import { NavBar } from "../NavBar";

import './Plans.css';
import { Reviews } from "./Components/VideoH/Reviews";
import Layout from "../../Layout";

function Plans() {
    return (
        <Layout transparent={true}>
            <Information />
            <Reviews transparent={true} />
        </Layout>
    );
}

export { Plans };