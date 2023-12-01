import React from 'react'
import logo from "../../images/footer logo.webp"
import footerBg from "../../images/footerbg.webp"
import "./Footer.css"
import { Button, ButtonGroup } from '@mui/material'

function Footer({ transparent }) {
    return (
        <footer className={`${!transparent && "bg-black"} relative overflow-hidden`}>
            <div className='absolute bottom-0 bg-fixed bg-bottom w-full h-full opacity-30 blur-sm' style={!transparent ? { backgroundImage: `url(${footerBg})` } : {}}>
                <div className='w-full h-full bg-gradient-to-t from-[#00000080]' />
            </div>
            {/* <img src={footerBg} className='absolute top-0 opacity-30 blur-sm' /> */}
            <div className='flex items-center justify-content-center h-[30rem]'>
                <img className=" invert" src={logo} alt="Logo" />
            </div>

            <div className='flex justify-center items-center'>
            <ButtonGroup variant="text" aria-label="text button group">
                <Button>Facebook</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
            </div>

        </footer>
    )
}

export { Footer };