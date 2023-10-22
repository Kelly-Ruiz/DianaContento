import myBeliefs from "../../../images/DianaColor2.png"

function WhoIsDiana() {
    return (
        <section className="flex section-beliefs">
            <div className="flex flex-col mt-20">
                <article className="p-5 pl-20">
                    <h2 className="text-[5rem]">Who is Diana Contento?</h2>
                    <p >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer
                        adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                        volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
                        nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
                        velit esse.</p>
                </article>
                
            </div>
            <figure className="flex justify-end w-[60rem] h-[30rem] relative">
                <img className="max-w-full absolute top-[25%]" src={myBeliefs} alt="Advences" />
            </figure>
        </section>
    );
}

export default WhoIsDiana;