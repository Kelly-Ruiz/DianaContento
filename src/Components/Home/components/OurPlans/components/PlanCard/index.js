import "./PlanCard.css"
import { Box, Button, Card, Divider } from "@mui/material"

function PlanCard({ level }) {
    return (
        <Card className="w-72 p-6 flex flex-col gap-4 justify-center items-center rounded-2xl bg-gradient-to-b from-MainColor to-LightColor">
            <Box className="bg-white shadow-md rounded-[1.5rem] w-52 py-2 shadow-[#00000060] text-MainColor">
                <h3 className="text-center font-bold italic text-2xl">
                    {level == "premium" ? "Premium" : "Ultimate"}
                </h3>
                <ul id="premiumRaiting" className="plan-rating flex  font-black cursor-default">
                    <li className="">★</li>
                    <li>★</li>
                    <li>★</li>
                    <li className={level == "premium" ? "text-gray-300" : ""}>★</li>
                    <li className={level == "premium" ? "text-gray-300" : ""}>★</li>
                </ul>
            </Box>
            <Divider className="p-[0.4px] opacity-100 w-[80%] bg-white" />
            <div className="text-center flex flex-col gap-3">
                <h4 className="font-bold text-2xl">
                    {level == "premium" ? "$6,7" : "$10"}
                    <span className="italic">a day</span></h4>
                <Divider className="opacity-100 w-[100%] bg-white" />
                <div>
                    <h5 className="text-center text-lg">
                        {level == "premium" ? "$200.000" : "$300.000"}
                    </h5>
                    <p className="text-[#00000080] text-xs">PER MONTH</p>

                </div>
            </div>
            <Divider className="p-[0.4px] opacity-100 w-[80%] bg-white" />
            <Button className="bg-white text-MainColor rounded-full text-xl font-bold px-10 shadow-md shadow-[#00000060]" variant="contained">
                Buy Now
            </Button>
        </Card>
    );
}

export { PlanCard };