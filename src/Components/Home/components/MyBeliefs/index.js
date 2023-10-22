import myBeliefs from "../../../../images/mybeliefa img.webp"
import "./MyBeliefs.css"

function MyBeliefs() {
    return (
        <section class="d-flex section-beliefs justify-content-center">
            <div class="col-8 d-flex justify-content-center align-items-center">
                <div class="col-4">
                    <img class="mw-100" src={myBeliefs} alt="Advences" />
                </div>
                <article class="col-8 p-5">
                    <h2 class="display-2">My beliefs</h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer
                        adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                        volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
                        nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
                        velit esse.</p>
                </article>
            </div>
        </section>
    );
}

export {MyBeliefs};