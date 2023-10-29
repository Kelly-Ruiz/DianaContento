import './App.css';
import { Footer } from './Components/Footer';
import { NavBar } from './Components/NavBar';
import LoginPop from './Pops/Login';

function Layout({ children }) {

  return (
    <>
      <NavBar />
      {children}
      <Footer />
      <LoginPop />
    </>
  );
}

export default Layout;
