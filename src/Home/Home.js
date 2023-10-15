import './Home.css';
import Header from './components/Header';
import MyBeliefs from './components/MyBeliefs';
import OurPlans from './components/OurPlans';
import Footer from './components/Footer';

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

