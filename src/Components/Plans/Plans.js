import React from "react";
import { Information } from "./Components/Information/Information";

import './Plans.css';
import Layout from "../../Layout";
import { Reviews } from "../About/Components/Reviews/Reviews";

function Plans() {
    return (
        <Layout transparent={true}>
            <Information />
            <Reviews transparent={true} />
        </Layout>
    );
}

export { Plans };