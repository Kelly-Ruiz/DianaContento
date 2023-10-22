import OurPlansCarousel from "./components/Carousel";
import IconColumn from "./components/IconColumn";
import PlanCard from "./components/PlanCard";
import "./OurPlans.css"

function OurPlans() {
    return (
        <>
            <section className="OurPlansSection flex items-center justify-center">
                <div className="toCenterSection">
                    <h2 className="titleBlack py-5">Our plans</h2>
                    <article className="">
                        <div className="grid grid-cols-3 gap-16">
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