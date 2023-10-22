import { signOut } from 'firebase/auth';
import { auth } from './Firebase/firebase';

import { Home } from './Components/Home/Home'

import './App.css';

function App() {
  const user = auth.currentUser
  console.log(user)
  const submit = async () => { await signOut(auth) }


  return (
    <>
      <Home />
    </>
  );
}

export default App;
