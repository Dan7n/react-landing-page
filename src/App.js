// import './App.css';
import NavbarContainer from "./components/header/NavbarContainer"
import LandingPageContainer from "./components/landingPage/LandingPageContainer"
import OverlayDiv from "./components/landingPage/OverlayDiv"
import ContentPageContainer from "./components/content/ContentPageContainer"
import ArticlesContainer from "./components/articles/ArticlesContainer"


function App() {
  return (
    <>
      <NavbarContainer />
      <OverlayDiv />
      <LandingPageContainer />
      <ContentPageContainer />
      <ArticlesContainer />
    </>
  );
}

export default App;
