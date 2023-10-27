import { Header } from './components/Header';
import { MyBeliefs } from './components/MyBeliefs';
import { OurPlans } from './components/OurPlans';
import { Footer } from '../Footer';
import { NavBar } from '../NavBar';

import './Home.css';

function Home() {
  return (
    <>
      <NavBar />
      <Header/>
      <MyBeliefs/>
      <OurPlans/>
      <Footer />
    </>
  );
}

export { Home };

