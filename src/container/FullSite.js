import Main from '../component/main/Main.jsx'
import Navbar from '../component/navbar/Navbar.jsx'
import AboutMe from '../component/aboutMe/AboutMe.jsx'
import Skills from '../component/skills/Skills.jsx'
import Portfolio from '../component/portfolio/Portfolio.jsx'
import Footer from '../component/footer/Footer.jsx'

function FullSite() {
  return (
    <>
      <Navbar/>
      <Main/>
      <AboutMe/>
      <Skills/>
      <Portfolio/>
      <Footer/>
    </>
  );
}


export default FullSite;
