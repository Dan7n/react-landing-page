// import './App.css';
import NavbarContainer from "./components/header/NavbarContainer"
import LandingPageContainer from "./components/landingPage/LandingPageContainer"
import OverlayDiv from "./components/landingPage/OverlayDiv"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


function App() {
  return (
    <>
      <NavbarContainer />
      <OverlayDiv />
      <LandingPageContainer />
    </>
  );
}

export default App;
