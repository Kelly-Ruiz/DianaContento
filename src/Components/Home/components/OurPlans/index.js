import { Box, Button, Card, Divider } from "@mui/material";
import { OurPlansCarousel } from "./components/Carousel";
import { IconColumn } from "./components/IconColumn";
import { PlanCard } from "./components/PlanCard";
import "./OurPlans.css"

function OurPlans() {
    return (
        <>
            <section className="OurPlansSection">
                <div className="toCenterSection">
                    <h2 className="titleBlack italic">Our plans</h2>
                    <article className="my-10">
                        <div className="flex justify-center gap-4">
                            <PlanCard level="premium" />
                            <PlanCard level="ultimate" />
                            
                        </div>
                    </article>
                    <OurPlansCarousel />
                </div>
            </section>

        </>
    );
}

export { OurPlans };