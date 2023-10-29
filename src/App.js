import { signOut } from 'firebase/auth';
import { auth } from './Firebase/firebase';
import { Home } from './Components/Home/Home'
import './App.css';
import { Providers } from './Providers';

function App() {
  const user = auth.currentUser
  console.log(user)
  const submit = async () => { await signOut(auth) }


  return (
    <Providers>
      <Home />
    </Providers>
  );
}

export default App;
