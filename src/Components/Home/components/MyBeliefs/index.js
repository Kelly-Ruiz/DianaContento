import myBeliefs from "../../../../images/mybeliefa img.webp"
import "./MyBeliefs.css"

function MyBeliefs() {
    return (
        <section className="flex section-beliefs justify-center overflow-hidden">
            <div className="h-[40rem] max-w-[70rem] flex justify-center items-center relative">
                <article className="w-[70%]">
                    <h2 className="text-[3rem] p-4 italic">My beliefs</h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer
                        adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                        volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
                        nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
                        velit esse.</p>
                </article>
                <figure className="absolute z-[-1] right-[-10rem] top-10  translate-y-[55%] translate-x-[10%] scale-[230%] opacity-20">
                    <img className="" src={myBeliefs} alt="Advences" />
                </figure>
            </div>
        </section>
    );
}

export {MyBeliefs};