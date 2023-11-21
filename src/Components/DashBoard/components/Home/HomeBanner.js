import { Box } from '@mui/material';
import React from 'react';
import character from "../../assets/images/girl.png"
import "./dashboardHome.css"

function HomeBanner() {
    return (
        <div className='p-4 w-full flex justify-center h-[25rem]'>
            <Box className={`banner1 bg-cover flex justify-center items-center rounded-lg w-[80%] relative`}>
                <div className='text-white flex flex-col gap-2'>
                    <h2 className='text-3xl font-bold'>Hello, user!</h2>
                    <p>Lorem lorem lorem Lorem</p>
                    <p className='text-md font-bold'>OUTDOOR TEMPERATURE: 22°C</p>
                    <p className='text-md font-bold'>SUNNY WEATHER</p>
                </div>
                <div>
                    <img className='absolute bottom-0' src={character} />
                </div>
            </Box>
        </div>
    )
}

export default HomeBanner