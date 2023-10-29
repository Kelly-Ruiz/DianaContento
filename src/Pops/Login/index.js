import React, { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, inMemoryPersistence, setPersistence } from 'firebase/auth';
import "./Login.css";
import { useLoginContext } from '../../Providers';
import { Button, IconButton } from '@mui/material';
import { CgClose } from 'react-icons/cg';
import { auth } from '../../Firebase/firebase';
import { useNavigate } from 'react-router-dom';
import ShowIcon from '../../Assets/Icons/ShowIcon';
import HideIcon from '../../Assets/Icons/HideIcon';
import { motion, AnimatePresence } from "framer-motion"

function LoginPop() {
    const { openLogin, setOpenLogin } = useLoginContext();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navegate = useNavigate();

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
        <AnimatePresence>
            {
                openLogin &&
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ ease: "easeInOut", duration: 0.5 }}
                    className='fixed backdrop-blur-md top-0 left-0 flex h-screen w-screen justify-center items-center z-50'
                >
                    <div onClick={() => setOpenLogin(false)} className='bg-[#00000050] absolute w-screen h-screen' />
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: "0%" }}
                        exit={{ y: "100%" }}
                        transition={{ ease: "easeInOut", duration: 0.5 }}
                        className='pop-login w-[50rem] h-[45rem] text-MainColor flex flex-col justify-center items-center z-50 gap-2 relative'
                    >

                        <IconButton
                            className='text-white absolute top-0 right-0 p-4'
                            onClick={() => setOpenLogin(false)}>
                            <CgClose />
                        </IconButton>

                        <h2 className='font-bold text-4xl mt-20'>Login</h2>
                        <div className='flex gap-2'>
                            <p>
                                Don't have one?
                            </p>
                            <a href='/register'>
                                <p className='text-white'>
                                    Create an account
                                </p>
                            </a>
                        </div>
                        <form className='flex flex-col gap-2'>
                            <input
                                type='email'
                                className='bg-transparent font-bold text-white border-b-4 p-2'
                                placeholder='Email'
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <div className='flex items-center relative'>
                                <input
                                    className='bg-transparent font-bold text-white border-b-4 p-2'
                                    placeholder='Password'
                                    type={`${showPassword ? 'text' : 'password'}`}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <IconButton className='absolute p-0 right-[-2.5rem]' onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ?
                                            <HideIcon className="w-10" />
                                            :
                                            <ShowIcon className="w-10 opacity-50 hover:opacity-100" />
                                    }
                                </IconButton>
                            </div>
                            <Button
                                className='bg-white text-MainColor m-3 p-2 font-bold'
                                onClick={onClickMail}
                            >
                                Login
                            </Button>
                        </form>

                        <div id='mensajeAlerta' className='text-white text-center text-xs mb-2' />

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
                    </motion.div>

                </motion.div>
            }
        </AnimatePresence>
    )
}

export default LoginPop;