import './App.css';
import { Footer } from './Components/Footer';
import { NavBar } from './Components/NavBar';
import LoginPop from './Pops/Login';

function Layout({ children, transparent }) {

  return (
    <div className={`${transparent && 'information-p2'}`}>
      <NavBar />
      {children}
      <Footer transparent={transparent} />
      <LoginPop />
    </div>
  );
}

export default Layout;
