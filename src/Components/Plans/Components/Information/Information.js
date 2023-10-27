import React from "react";
import './Information.css';
import '../../../Estilos.css';
import { Box, Button, Card } from "@mui/material";

const PlanBox = ({ level }) =>
    <Box className="bg-white flex justify-center items-center flex-col shadow-md rounded-[1.5rem] w-[50%] py-2 shadow-[#00000060] text-MainColor">
        <h3 className="text-center py-4 font-bold italic text-3xl">
            {level == "premium" ? "Premium" : "Ultimate"}
        </h3>
        <div className="text-center text-black flex flex-col gap-6">
            <h4 className="font-bold text-3xl">
                {level == "premium" ? "$6,7" : "$10"}
                <span className="font-normal"> a day</span>
            </h4>
            <div>
                <h5 className="text-center text-3xl">
                    {level == "premium" ? "$200.000" : "$300.000"}
                </h5>
                <p className="text-[#00000080] text-xs">
                    PER MONTH
                </p>
            </div>
        </div>
        <Button className="shadow-none text-MainColor hover:bg-LightColor rounded-md text-xl font-bold w-min whitespace-nowrap my-4 px-10 " variant="contained">
            Pay Plan
        </Button>
    </Box>


function Information() {
    const level = "premium";
    return (

        <section className="flex justify-center flex-col items-center information-p2 overflow-hidden py-12">
            <div className="max-w-[72rem] w-[72rem]">
                <Card className="w-full p-6 flex flex-row gap-4 justify-center items-center rounded-2xl bg-gradient-to-r from-[#D9F3F1] to-[#6BD2CD]">
                    <h2 className="text-[5rem] font-bold italic w-min px-8">Our Plans</h2>
                    <PlanBox level={"premium"} />
                    <PlanBox level={"ultimate"} />
                </Card>
            </div>
        </section>

    );
}

export { Information };