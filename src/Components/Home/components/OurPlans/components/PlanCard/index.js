import titleBg from "../../../../../../images/titlebg.webp"
import star from "../../../../../../images/star.webp"
import grayStar from "../../../../../../images/graystar.webp"
import check from "../../../../../../images/check.png"
import xIcon from "../../../../../../images/x.png"
import "./PlanCard.css"

function PlanCard({ level }) {
    return (
        <section class="white flex justify-center w-full">
            <div class="w-full pricing-card">

                <div class="relative pricing flex flex-col justify-between items-center h-full w-full">
                    <img class="absolute pt-4 h-[9rem]" src={titleBg} alt="" />
                    <div class="titleContent py-9 pb-4">
                        {level == "premium" ?
                            <>
                                <h2 className="text-2xl">Premium</h2>
                                <ul id="premiumRaiting" class="plan-rating flex py-2">
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
                                <h2 className="text-2xl">Ultimate</h2>
                                <ul id="premiumRaiting" class="plan-rating flex py-2">
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
                    <ul class="pricing p-green benefits-list mt-3 flex items-start flex-col">

                        <li class="flex justify-center items-center">
                            <img src={check} alt="check" />
                            Meals plans
                        </li>
                        <li class="flex justify-center items-center">
                            <img src={check} alt="check" />
                            Accompaniment</li>
                        <li class={`flex justify-center items-center  ${level == "premium" && "x"}`}>
                            {level == "premium" ?
                                <img src={xIcon} alt="check x" />
                                :
                                <img src={check} alt="check" />

                            }

                            Workouts Routines
                        </li>
                        <li class={`flex justify-center items-center ${level == "premium" && "x"}`}>
                            {level == "premium" ?
                                <img src={xIcon} alt="check" />
                                :
                                <img src={check} alt="check" />

                            }
                            Workouts mon-Friday
                        </li>

                    </ul>
                    <div class="flex items-center justify-center flex-col pb-4 pt-2">
                        {
                            level == "premium" ?
                                <>
                                    <h3>$200.00</h3>
                                    <span>USD MONTH</span>
                                    <button className="mt-2">Buy Now</button>
                                </>
                                :
                                <>
                                    <h3>$300.00</h3>
                                    <span>USD MONTH</span>
                                    <button className="mt-2">Buy Now</button>
                                </>
                        }

                    </div>
                </div>
            </div>
        </section>
    );
}

export { PlanCard };