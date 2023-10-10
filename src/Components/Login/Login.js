import React, { useState } from 'react';
import './Login.css';
import { FacebookAuthProvider, signInWithEmailAndPassword, signInWithRedirect } from 'firebase/auth';
import { auth } from '../../Firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Image, Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import { CgClose } from 'react-icons/cg';
import { FaGoogle, FaFacebook } from 'react-icons/fa'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navegate = useNavigate()
    const submit = async () => {
        await signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                console.log('User signed in!');
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
                console.error(error);
            });
        //navegate("/")
    }

    const [show, setShow] = useState(false);
    const abrirModal = () => setShow(!show)
    const cerrarModal = () => setShow(!show)

    //FUNCIONAMIENTO DEL BOTON DE GOOGLE -- FUNCIONANDO
    async function handleOnClickGoogle() {
        const googleProvider = new GoogleAuthProvider()
        await singInGoogle(googleProvider);

        async function singInGoogle(googleProvider) {
            try {
                const res = await signInWithPopup(auth, googleProvider);
            }
            catch (error) { }
        }
    }

    //FUNCIONAMIENTO DEL BOTON DE FACEBOOK -- FUNCIONANDO
    async function handleOnClickFacebook() {
        // Sign in using a popup.
        var provider = new FacebookAuthProvider();
        provider.addScope('user_birthday');
        signInWithPopup(provider).then(function (result) {
            // This gives you a Facebook Access Token.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
        });
    }

    return (
        <>
            <button onClick={abrirModal}>Log in</button>

            <Modal show={show}>
                <div className='log-in-form'>
                    <div className='log-in-parte1'>

                        <button id='btn-cerrar' onClick={cerrarModal}>
                            <CgClose />
                        </button>
                    </div>
                    <div className='log-in-parte2'>
                        <h1 className='titulo deco-text'>Log In</h1>
                        <p className='texto' >Don´t have one? <a href='/register'>Create an account</a></p>

                        <div className='container input-part'>
                            <input type='email' className='input-text' id='email' placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} required />
                            <input type='password' className='input-text' id='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />

                            <div id='mensajeAlerta'></div>
                        </div>

                        <div className='container submit-part'>
                            <button className='submit-part login-buttons login-basic-button' onClick={submit}>Log in</button>
                            <a className='submit-part' id='forgot-password' href='/'>Forgot password</a>
                            <p className='texto'>or</p>
                            <div className='other-buttons'>

                                <button className='login-buttons login-other-buttons' onClick={handleOnClickGoogle}><FaGoogle /> Continue with Google</button>
                                <button className='login-buttons login-other-buttons' onClick={handleOnClickFacebook}><FaFacebook /> Continue with Facebook</button>
                            </div>

                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export { Login };