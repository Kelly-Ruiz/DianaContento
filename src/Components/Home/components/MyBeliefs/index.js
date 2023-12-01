import myBeliefs from "../../../../images/mybeliefa img.webp"
import "./MyBeliefs.css"

function MyBeliefs() {
    return (
        <section className="flex section-beliefs justify-center overflow-hidden">
            <div className="h-[40rem] w-[50rem] flex justify-center items-center relative">
                <article className="w-full">
                    <h2 className="text-[3rem] p-4 italic">My beliefs</h2>
                    <ul className="text-[1.5rem] font-semibold">
                        <li>
                        -Discipline is my Strength of mind.

                        </li>
                        <li>

                        -Don’t stop until you’re feeling proud of yourself.
                        </li>
                        <li>
                        -Age is just a number

                        </li>
                        <li>
                        -Self love. Do it for you

                        </li>
                    </ul>
                </article>
                <figure className="absolute z-[-1] right-[-10rem] top-10  translate-y-[55%] translate-x-[10%] scale-[230%] opacity-20">
                    <img className="" src={myBeliefs} alt="Advences" />
                </figure>
            </div>
        </section>
    );
}

export { MyBeliefs };