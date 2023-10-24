import React from 'react'
import logo from "../../images/footer logo.webp"
import footerBg from "../../images/footerbg.webp"
import "./Footer.css"

function Footer() {
    return (
        <footer className='bg-black relative overflow-hidden '>
            <div className='absolute bottom-0 bg-fixed bg-bottom w-full h-full opacity-30 blur-sm' style={{ backgroundImage: `url(${footerBg})` }}>
                <div className='w-full h-full bg-gradient-to-t from-[#00000080]'/>
                </div>
            {/* <img src={footerBg} className='absolute top-0 opacity-30 blur-sm' /> */}
            <div className='flex items-center justify-content-center h-[30rem]'>
                <img className="mw-100 invert" src={logo} alt="Logo" />
            </div>
            
        </footer>
    )
}

export { Footer };