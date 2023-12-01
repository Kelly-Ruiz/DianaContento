import React from "react";
import './Information.css';
import '../../../Estilos.css';
import { Box, Button, Card } from "@mui/material";

const PlanBox = ({ level }) =>
    <Box className="bg-white flex justify-center items-center flex-col shadow-md rounded-[1.5rem] w-[50%] py-2 shadow-[#00000060] text-MainColor">
        <h3 className="text-center py-4 font-bold italic text-[3rem]">
            {level == "premium" ? "Premium" : "Ultimate"}
        </h3>
        <div className="text-center text-black flex flex-col gap-6">
            <h4 className="font-bold text-[4rem] leading-10">
                {level == "premium" ? "$6,7" : "$10"}
                <br />
                <span className="font-normal text-xl"> a day</span>
            </h4>
            {
                level == "premium" ?
                    <p className="text-xl">
                        Only meals plans
                        <br />
                        Rotations weekly
                    </p>
                    :
                    <p className="text-xl">
                        Meal plans + Workout routines
                        <br />
                        Workouts Mon-Friday
                        <br/>
                        2 days OFF
                    </p>
            }
            <div>
                <h5 className="text-center text-2xl text-[#00000080]">
                    {level == "premium" ? "$200" : "$300"} x 4 weeks
                </h5>
            </div>
        </div>
        <Button className="shadow-none text-MainColor hover:bg-LightColor rounded-md text-xl font-bold w-min whitespace-nowrap my-4 px-10 " variant="contained">
            Pay Plan
        </Button>
    </Box>


function Information() {
    const level = "premium";
    return (

        <section className="flex justify-center flex-col items-center  overflow-hidden py-12">
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