import sponsor1 from "../../../../../../images/sponsor carrousel.webp"
import "./OurPlansCarousel.css"
import "./carousel.js"

function OurPlansCarousel() {
    return (
        <article className="m-auto w-fit">

            <h2 class="bold subtitleBlack">Our sponsoring brands</h2>

            <div class="carousel d-flex">
                <div class="slider-wrapper">
                    <button data-btn='previos'></button>
                    <div class="slider">
                        <div class="slide num1" data-type="before">
                            <img src={sponsor1} alt="sponsor1" />
                        </div>
                        <div class="slide num2" data-type="active">
                            <img src={sponsor1} alt="sponsor1" />
                        </div>
                        <div class="slide num3" data-type="active">
                            <img src={sponsor1} alt="sponsor1" />
                        </div>
                        <div class="slide num4" data-type="active">
                            <img src={sponsor1} alt="sponsor1" />
                        </div>
                        <div class="slide num5" data-type="active">
                            <img src={sponsor1} alt="sponsor1" />
                        </div>
                        <div class="slide num6" data-type="after">
                            <img src={sponsor1} alt="sponsor1" />
                        </div>
                        <div class="slide num7" data-type>
                            <img src={sponsor1} alt="sponsor1" />
                        </div>
                        <div class="slide num8">
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