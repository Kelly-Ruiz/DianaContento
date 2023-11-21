import React from 'react'
import { Login } from '../NavBar/Components/Login/Login';
import GearIcon from './assets/icons/toolbar/GearIcon';
import NotificationIcon from './assets/icons/toolbar/NotificationIcon';
import { Button, IconButton } from '@mui/material';

function DashNav() {
    return (
        <div className="flex justify-end bg-white w-full z-40 p-2 px-5 shadow-md">

            <div className="flex gap-2">
                <IconButton className=''>
                    <GearIcon color="#666" className="w-8" />
                </IconButton>
                <IconButton className=''>
                    <NotificationIcon color="#666" className="w-8" />
                </IconButton>
            </div>

        </div>
    )
}

export default DashNav