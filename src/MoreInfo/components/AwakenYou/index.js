import AwakenCarrousel from "./Carrousel";


function AwakenYou() {
    return (
        <>
            <section className="OurPlansSection">
            <article className="p-5 pl-20 text-end OurPlansSection items-start">
                <div className="flex flex-col items-center w-[50%] py-10">
                    <h2 className="text-[3rem] text-right mb-8 text-MainColor font-bold">Awaken your determination and become the best version of yourself!</h2>
                    <button className="bg-MainColor w-52 text-white px-5 py-3 rounded-full ">
                        Check our plans
                    </button>
                </div>
                </article>
                <AwakenCarrousel/>
            </section>

        </>
    );
}

export default AwakenYou;