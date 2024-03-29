import Navbar from './Components/NavBar/Navbar';
import { Portfolio } from './Components/Portfolio/Portfolio';
import {About} from "./Components/About/About"
import { Projects } from './Components/Projects/Projects';
import { Blogs } from './Components/Blogs/Blogs';
import { Contact } from './Components/Contact/Contact';
import {Scrollbar} from 'smooth-scrollbar-react';
import { Skills } from './Components/Skills/Skills';
// import styles from "../src/Components/BottomBanner/Banner.module.css"
import { Banner } from './Components/BottomBanner/Banner';
import { DrawerNav } from './Components/NavBar/DrawerNav';
import { Skk } from './Components/skk/Skk';
import { SAbout } from './Components/skk/SAbout';
import { Sfooter } from './Components/skk/Sfooter';

function App() {
  return (
    <div>
      <Scrollbar renderByPixels={true}>
      <Skk/>
        {/* <Portfolio /> */}
        <SAbout/>

        {/* <About /> */}
        <Skills />
        <Projects />
        {/* <Blogs /> */}
        <Contact />
      </Scrollbar>
      <DrawerNav />
      {/* <Skk/> */}

      <Navbar />
      {/* <Banner /> */}
      <Sfooter/>
    </div>
  );
}

export default App;
