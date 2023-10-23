import plan1 from "../../../../../../images/plan icon 1.webp"
import plan2 from "../../../../../../images/plan icon 2.webp"
import plan3 from "../../../../../../images/plan icon 3.webp"

function IconColumn() {
    return (
        <section className="col-2 ourplans-icon">
            <ul className="d-flex flex-column align-items-center h-100">
                <li>
                    <img src={plan1} alt="Height" />
                </li>
                <li>
                    <img src={plan2} alt="Calendar" />
                </li>
                <li>
                    <img src={plan3} alt="Balance" />
                </li>
            </ul>
        </section>
    );
}

export { IconColumn };