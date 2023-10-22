import React from "react";
import './Information.css';
import '../../../Estilos.css';

import dianaFullbody from "./Images/DianaCuerpoentero.webp"

function Information() {
    return (
        <>
            <section className="container information-p1 text-green">
                <h2 className="title text-left text-5xl lg:text-7xl my-6">Who is Diana Contento?</h2>
                <p className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-5">
                    <span className="col-span-2 text-center sm:text left" >
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex eacommodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    </span>
                </p>
            </section>
            <section className=" information-p2">
                <div className="container grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="col-span-2 grid">
                        <p className="phrase title text-green text-shadow text-right text-5xl lg:text-7xl my-4">
                            Awaken your determination and become the best version of yourself!
                        </p>
                        <button className="plans-btn text-white box-shadow rounded-lg my-4 justify-self-center">
                            Check our plans
                            </button>
                    </div>
                    <div className="">
                        <img src={dianaFullbody} className="dianaFullbody col-span-1" />
                    </div>
                </div>
                <div className="title text-white text-5xl lg:text-7xl my-4">
                    Our members' testimonials
                </div>
            </section>
        </>
    );
}

export { Information };