import myBeliefs from "../../../../images/mybeliefa img.webp"
import "./MyBeliefs.css"

function MyBeliefs() {
    return (
        <section class="flex section-beliefs justify-center">
            <div class="grid grid-cols-2 gap-4 justify-center items-center">
                <figure class="flex justify-end">
                    <img class="max-w-full" src={myBeliefs} alt="Advences" />
                </figure>
                <article class="p-5 pr-20">
                    <h2 class="text-[3rem]">My beliefs</h2>
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