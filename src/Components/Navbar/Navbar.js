import React from 'react';
import './Navbar.css';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';

function Navbar({state}) {
    if(!state){ //SIN USUARIO LOGEADO

        return(
            <>
            <Login/>
            <Register/>
            </>
        );
    }
    else{ //USUARIO LOGEADO

    }
}

export { Navbar };