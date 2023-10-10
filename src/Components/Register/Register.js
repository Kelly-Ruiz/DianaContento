import React, { useState } from 'react';
import './Register.css';
import { auth } from '../../Firebase/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Modal} from 'react-bootstrap';

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
            updateProfile(user, {
                displayName: userName
            })
            navegate("/")
        }
        else {

            console.log("contraseñas no coinciden")
        }
    }

    const [show, setShow] = useState(false);
    const abrirModal = () => setShow(!show)
    const cerrarModal = () => setShow(!show)

    return (
        <>

            <button onClick={abrirModal}>Sign in</button>

            <Modal show={show}>
                <div className='sing-up'>
                    <button onClick={cerrarModal}>x</button>
                    <h1>Sign In</h1>
                    <p>Don´t have one? <a href='/register'>Create an account</a></p>

                    <section id='first-part'>
                        <div className='container'>
                            <input type='text' id='userName' placeholder='Name' onChange={(e) => setUserName(e.target.value)} />
                            <input type='email' id='email' placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} />
                            <input type='password' id='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
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
            </Modal>
        </>
    );
}

export { Register };