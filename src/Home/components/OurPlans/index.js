import OurPlansCarousel from "./components/Carousel";
import IconColumn from "./components/IconColumn";
import PlanCard from "./components/PlanCard";
import "./OurPlans.css"

function OurPlans() {
    return (
        <>
            <section class="OurPlansSection">
                <div class="toCenterSection">
                    <h2 class="titleBlack">Our plans</h2>
                    <article class="">
                        <div class="d-flex justify-content-around">
                            <PlanCard level="premium"/>
                            <PlanCard level="ultimate"/>
                            <IconColumn/>
                        </div>
                    </article>
                    <OurPlansCarousel/>
                </div>
            </section>

        </>
    );
}

export default OurPlans;