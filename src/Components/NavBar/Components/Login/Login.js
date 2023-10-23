import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, inMemoryPersistence, setPersistence } from 'firebase/auth';
import { auth } from '../../../../Firebase/firebase';
import { Modal } from 'react-bootstrap';
import { CgClose } from 'react-icons/cg';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import premiumIcon from "../../../../images/premium icon.webp";
import premiumBg from "../../../../images/premium b.webp";

import 'bootstrap/dist/css/bootstrap.css'
import '../../../Estilos.css'
import './Login.css';
import CrownIcon from './Images/CrownIcon';
import { Button } from '@mui/material';

function Login() {
    const navegate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onClickMail = async () => {
        setPersistence(auth, inMemoryPersistence)
            .then(() => {
                return (
                    signInWithEmailAndPassword(auth, email, password)
                        .then(() => {
                            console.log('User signed in!');
                            navegate('/dashboard')
                        })
                        .catch(error => {
                            if (error.code === 'auth/user-not-found') {
                                console.log('There no user exist with that email');
                                document.getElementById("mensajeAlerta").innerHTML = "<p>We cannot find any account associated with this email address. Please try again.</p>"
                            }
                            if (error.code === 'auth/invalid-email') {
                                console.log('That email address is invalid!');
                                document.getElementById("mensajeAlerta").innerHTML = "<p>This is not a valid email address</p>"
                            }

                            if (error.code === 'auth/wrong-password') {
                                console.log('That email address is invalid!');
                                document.getElementById("mensajeAlerta").innerHTML = "<p>The password is not correct</p>"
                            }
                            console.error(error);
                        })

                )
            }
            )
    }

    const [show, setShow] = useState(false);
    const abrirModal = () => setShow(!show)
    const cerrarModal = () => setShow(!show)

    //FUNCIONAMIENTO DEL BOTON DE GOOGLE -- FUNCIONANDO
    async function onClickGoogle() {
        const googleProvider = new GoogleAuthProvider()
        //googleProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;

                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
                navegate("/dashboard")
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log("getRedirectResult ERROR")
                console.log(error)
            });
    }

    return (
        <>
            <Button 
            className="bg-MainColor hover:bg-DarkColor opacity-90 rounded-xl" 
            startIcon={<CrownIcon className="w-10" color="#fff" />} 
            variant="contained"
            onClick={abrirModal}
            
            >
                Premium Zone
            </Button>
            {/* <button className="h-full" onClick={abrirModal}>
                <img className="h-full" src={premiumBg} alt="premium" />
                <div className="absolute">

                    <CrownIcon className="w-10" color="#fff" />


                    <img src={premiumIcon} alt="crown" className="crown-icon" />
                    <p className="m-0 px-1 whitespace-nowrap">Premium zone</p>
                </div>
            </button> */}


            <Modal show={show}>
                <div className='log-in-form self-center'>

                    <div className='relative'>

                        <button
                            id='btn-cerrar'
                            className='text-white'
                            onClick={cerrarModal}>
                            <CgClose />
                        </button>
                    </div>

                    <div className='log-in-parte2 flex flex-col text-center pt-10'>

                        <div className='space-y-3 pt-10'>
                            <h2 className='title text-green text-shadow text-5xl pt-10'>Log In</h2>

                            <p className='text-green text-xs' >Don´t have one? <a className='text-white' href='/register'>Create an account</a></p>
                        </div>

                        <br /><br />
                        <form className='container flex flex-col space-y-6 w-2/3'>

                            <input
                                id='email'
                                type='email'
                                className='input-text'
                                placeholder='E-mail'
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />

                            <input
                                id='password'
                                type='password'
                                className='input-text'
                                placeholder='Password'
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />

                            <div id='mensajeAlerta' className='text-white text-center text-xs'
                            ></div>

                            <div id='mail-btn' className='text-green flex flex-col space-y-2 '
                            >
                                <button
                                    className='Login-btn font-bold italic w-60 text-2xl'
                                    onClick={onClickMail}>
                                    <p>Log in</p>
                                </button>
                                <a id='forgot-password' href='/'> Forgot password </a>
                                <p className='texto my-3'>or</p>
                            </div>
                        </form>
                    </div>

                    <section className='container text-green font-bold flex justify-center space-x-4 pb-8' >
                        <button className='Login-btn w-10 h-10 text-md ' onClick={onClickGoogle}>
                            G
                        </button>
                        <button className='Login-btn w-10 h-10 text-md' onClick={onClickGoogle}>
                            F
                        </button>
                        <button className='Login-btn w-10 h-10 text-md' onClick={onClickGoogle}>
                            I
                        </button>
                    </section>
                </div>
            </Modal>
        </>
    );
}

export { Login };