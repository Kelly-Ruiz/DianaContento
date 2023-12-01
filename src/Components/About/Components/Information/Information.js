import React from "react";
import './Information.css';
import '../../../Estilos.css';

import dianaFullbody from "./Images/DianaCuerpoentero.webp"
import { Reviews } from "../Reviews/Reviews";


function Information() {
    return (
        <>
            <section className="flex justify-center text-green py-8">
                <div className="w-[72rem] p-4">
                    <h2 className="title text-center text-5xl lg:text-7xl my-6">
                        Who is Diana Contento?
                    </h2>
                    <p className="p-4">
                        Colombian mom of 2 boys. Journalist & Bodybuilder by passion. After suffer post partum depression with my first pregnancy I just focus on myself to work hard every day to build my mind first to be strong mentally enough to build my physical body the way I just dream it. For me Excuses are the limitations of our mind. Proud mom 42 years old and living my healthy inside our life the way I always visualize.
                    </p>
                </div>
            </section>

            <section className="flex flex-col items-center justify-center information-p2 overflow-hidden py-12">
                <div className="w-[72rem]">
                    <div className="flex flex-col items-end justify-end">
                        <p className="phrase w-[60rem] title text-green text-shadow text-right text-5xl lg:text-7xl my-4">
                            Awaken your determination and become the best version of yourself!
                        </p>
                        <a href="/" className="plans-btn text-white box-shadow rounded-lg my-4 justify-self-center">
                            Check our plans
                        </a>
                    </div>
                    <div className="relative">
                        <img src={dianaFullbody} className="absolute scale-[200%] left-[-15rem] top-50 opacity-10 grayscale" />
                    </div>
                </div>
                <Reviews transparent={true} />
            </section>
        </>
    );
}

export { Information };