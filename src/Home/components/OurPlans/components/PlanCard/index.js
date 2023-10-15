import titleBg from "../../../../../images/titlebg.webp"
import star from "../../../../../images/star.webp"
import grayStar from "../../../../../images/graystar.webp"
import check from "../../../../../images/check.png"
import xIcon from "../../../../../images/x.png"
import "./PlanCard.css"

function PlanCard({ level }) {
    return (
        <section class="white d-flex justify-content-center col-4 premium-plan">
            <div class="w-100 pricing-card">

                <div
                    class="position-relative pricing d-flex flex-column justify-content-between align-items-center h-100">
                    <img class="titleBG" src={titleBg} alt="" />
                    <div class="titleContent py-4 pb-4">
                        {level == "premium" ?
                            <>
                                <h2>Premium</h2>
                                <ul id="premiumRaiting" class="plan-rating d-flex py-2">
                                    <li><img src={star} alt="star" /></li>
                                    <li><img src={star} alt="star" /></li>
                                    <li><img src={star} alt="star" /></li>
                                    <li><img src={grayStar} alt="star" /></li>
                                    <li><img src={grayStar} alt="star" /></li>
                                </ul>
                                <a href="">
                                    <h4 class="py-2">READ MORE</h4>
                                </a>
                            </>
                            :
                            <>
                                <h2>Ultimate</h2>
                                <ul id="premiumRaiting" class="plan-rating d-flex py-2">
                                    <li><img src={star} alt="star" /></li>
                                    <li><img src={star} alt="star" /></li>
                                    <li><img src={star} alt="star" /></li>
                                    <li><img src={star} alt="star" /></li>
                                    <li><img src={star} alt="star" /></li>
                                </ul>
                                <a href="">
                                    <h4 class="py-2">READ MORE</h4>
                                </a>
                            </>
                        }
                    </div>
                    <ul class="pricing p-green benefits-list m-0 p-0 d-flex align-items-start flex-column">

                        <li class="d-flex justify-content-center align-items-center">
                            <img src={check} alt="check" />
                            Meals plans
                        </li>
                        <li class="d-flex justify-content-center align-items-center">
                            <img src={check} alt="check" />
                            Accompaniment</li>
                        <li class={`d-flex justify-content-center align-items-center  ${level == "premium" && "x"}`}>
                            {level == "premium" ?
                                <img src={xIcon} alt="check x" />
                                :
                                <img src={check} alt="check" />

                            }

                            Workouts Routines
                        </li>
                        <li class={`d-flex justify-content-center align-items-center ${level == "premium" && "x"}`}>
                            {level == "premium" ?
                                <img src={xIcon} alt="check" />
                                :
                                <img src={check} alt="check" />

                            }
                            Workouts mon-Friday
                        </li>

                    </ul>
                    <div class="d-flex align-items-center justify-content-center flex-column pb-4 pt-2">
                        {
                            level == "premium" ?
                                <>
                                    <h3>$200.00</h3>
                                    <span>USD MONTH</span>
                                    <button>Buy Now</button>
                                </>
                                :
                                <>
                                    <h3>$300.00</h3>
                                    <span>USD MONTH</span>
                                    <button>Buy Now</button>
                                </>
                        }

                    </div>
                </div>
            </div>
        </section>
    );
}

export default PlanCard;