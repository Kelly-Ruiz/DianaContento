import './Home.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MyBeliefs from './components/MyBeliefs';
import NavBar from './components/NavBar';
import OurPlans from './components/OurPlans';

function Home() {
  return (
    <>
    <Header></Header>
    <MyBeliefs></MyBeliefs>
    <OurPlans></OurPlans>
    <Footer/>
    </>
  );
}

export {Home};
