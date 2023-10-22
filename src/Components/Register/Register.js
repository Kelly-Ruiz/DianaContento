import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../Firebase/firebase';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { NavBar } from '../NavBar';
import './Register.css';
import '../Estilos.css'

function Register() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConf, setPasswordConf] = useState('');
    const navegate = useNavigate();

    const submit = async () => {
        if (password === passwordConf) {
            const user = auth.currentUser
            
            console.log(userName, " ", email, " ", password)

            await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
              });
            updateProfile(user, {
                displayName: userName
            })
            navegate("/")
        }
        else {

            console.log("contraseñas no coinciden")
        }
    }

    return (
        <>
            <NavBar />
            <div className='sing-up'>
                <h2 className='title text-green text-shadow text-center'>Create Account</h2>

                <section id='first-part'>
                    <div className='container'>
                        <label for="firtName">First Name</label>
                        <input type='text' id='firtName' placeholder='Name' onChange={(e) => setUserName(e.target.value)} />

                        <label for="lastName">Last Name</label>
                        <input type='text' id='lastName' placeholder='Name' onChange={(e) => setUserName(e.target.value)} />

                        <label for="userName">User Name</label>
                        <input type='text' id='userName' placeholder='Name' onChange={(e) => setUserName(e.target.value)} />

                        <label for="email">Email</label>
                        <input type='email' id='email' placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} />

                        <label for="password">Password</label>
                        <input type='password' id='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />

                        <label for="passwordConf">Confirm password</label>
                        <input type='password' id='passwordConf' placeholder='Confirm password' onChange={(e) => setPasswordConf(e.target.value)} />

                        <div id='password-incorrect'>

                        </div>
                    </div>
                </section>
                <p>

                </p>
                <div className='container'>
                    <button onClick={submit} >Sing up</button>
                    <p>Have an account <a id='log-in' href='/login'>Log in</a></p>
                </div>
            </div>
        </>
    );
}

export { Register };