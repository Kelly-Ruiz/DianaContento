import React from 'react'
import logo from "../../images/footer logo.webp"
import footerBg from "../../images/footerbg.webp"
import "./Footer.css"

function Footer() {
    return (
        <footer style={{ backgroundImage: `url(${footerBg})`, backgroundSize:"cover" }}>
            <div className='d-flex align-items-center justify-content-between p-n-b w-100'>
                <img className="mw-100" src={logo} alt="Logo" />
                <p className=' text-end white mw-50'>Lorem ipsum dolor sit amet, consecteLorem ipsum dolor sit amet, </p>

            </div>
        </footer>
    )
}

export {Footer};