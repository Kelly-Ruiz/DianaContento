import { useState, useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './Firebase/firebase';

import './App.css';
import { Login } from './Components/Login/Login';
import { Navbar } from './Components/Navbar/Navbar';

function App() {
  const user = auth.currentUser
  const submit = async () => { await signOut(auth) }


  console.log(user)
  return (
    <>
      {!user &&
       <Navbar
       state={false}
       /> 
      }

      {user &&
        <button onClick={submit}>Log out</button>
      }
    </>
  );
}

export default App;
