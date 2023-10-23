import sponsor1 from "../../../../../../images/sponsor carrousel.webp"
import "./OurPlansCarousel.css"
import "./carousel.js"

function OurPlansCarousel() {
    return (
        <article className="m-auto w-fit">

            <h2 className="bold subtitleBlack text-3xl">Our sponsoring brands</h2>

            <div className="carousel d-flex">
                <div className="slider-wrapper">
                    <button data-btn='previos'></button>
                    <div className="slider">
                        <div className="slide num1" data-type="before">
                            <img src={sponsor1} alt="sponsor1" />
                        </div>
                        <div className="slide num2" data-type="active">
                            <img src={sponsor1} alt="sponsor1" />
                        </div>
                        <div className="slide num3" data-type="active">
                            <img src={sponsor1} alt="sponsor1" />
                        </div>
                        <div className="slide num4" data-type="active">
                            <img src={sponsor1} alt="sponsor1" />
                        </div>
                        <div className="slide num5" data-type="active">
                            <img src={sponsor1} alt="sponsor1" />
                        </div>
                        <div className="slide num6" data-type="after">
                            <img src={sponsor1} alt="sponsor1" />
                        </div>
                        <div className="slide num7" data-type>
                            <img src={sponsor1} alt="sponsor1" />
                        </div>
                        <div className="slide num8">
                            <img src={sponsor1} alt="sponsor1" />
                        </div>
                    </div>
                    <button data-btn='next'></button>
                </div>

            </div>
        </article>
    );
}

export { OurPlansCarousel };