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
      <Header></Header>
      <MyBeliefs></MyBeliefs>
      <OurPlans></OurPlans>
      <Footer />
    </>
  );
}

export { Home };

