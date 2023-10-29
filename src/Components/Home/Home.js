import { Header } from './components/Header';
import { MyBeliefs } from './components/MyBeliefs';
import { OurPlans } from './components/OurPlans';
import { Footer } from '../Footer';
import { NavBar } from '../NavBar';

import './Home.css';
import Layout from '../../Layout';

function Home() {
  return (
    <>
      <Layout>
        <Header />
        <MyBeliefs />
        <OurPlans />
      </Layout>
    </>
  );
}

export { Home };

