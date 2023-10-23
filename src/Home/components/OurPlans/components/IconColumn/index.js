import plan1 from "../../../../../images/plan icon 1.webp"
import plan2 from "../../../../../images/plan icon 2.webp"
import plan3 from "../../../../../images/plan icon 3.webp"

function IconColumn() {
    return (
        <section className="ourplans-icon">
            <ul className="flex flex-col items-center h-full">
                <li className="flex justify-center">
                    <img src={plan1} alt="Height" />
                </li>
                <li className="flex justify-center">
                    <img src={plan2} alt="Calendar" />
                </li>
                <li className="flex justify-center">
                    <img src={plan3} alt="Balance" />
                </li>
            </ul>
        </section>
    );
}

export default IconColumn;