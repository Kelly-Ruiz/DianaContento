import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, userExist } from '../../Firebase/firebase';

function Autentication() {
    const navegate = useNavigate();
    //VARIABLES PARA VERIFICACION DE ESTADOS
    const [currenUser, setCurrentUser] = useState(null)
    const [state, setCurrentState] = useState(0)
    /*
    0 init - defecto
    2 login completed
    3 login withput register
    4 none login
    */

    //Ayuda a renderizar cuando hay cambios
    useEffect(() => {
        onAuthStateChanged(auth,
            async (user) => {
                if (user) {
                    console.log(user.displayName)
                    const isRegister = await userExist(user.uid)
                    if (isRegister) {
                        setCurrentState(2);
                        navegate("/dashboard");
                    }
                    else {
                        //setCurrentState(3);
                        navegate("/register");
                    }
                }
                else {
                    setCurrentState(4);
                    console.log("There's not autentication");
                }
            });
    }, []);
    console.log(state)


    //FUNCIONAMIENTO DEL BOTON DE GOOGLE -- FUNCIONANDO
    async function handleOnClick() {
        const googleProvider = new GoogleAuthProvider()
        await singInGoogle(googleProvider);

        async function singInGoogle(googleProvider) {
            try {
                const res = await signInWithPopup(auth, googleProvider);
            }
            catch (error) { }
        }
    }

    if (state === 2) {
        return (
            <div>Autenticado y Registrado</div>
        )
    }

    if (state === 3) {
        return (
            <div>Autenticado pero no Registrado</div>
        )
    }

    if (state === 4) {
        return (
            <button onClick={handleOnClick}>Login with Google</button>
            
        );
    }

    return (
        <div>Loading...</div>
    )
}

export { Autentication };