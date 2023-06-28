import { useRef } from 'react';
import Main from '../component/main/Main.jsx'
import Navbar from '../component/navbar/Navbar.jsx'
import AboutMe from '../component/aboutMe/AboutMe.jsx'
import Skills from '../component/skills/Skills.jsx'
import Portfolio from '../component/portfolio/Portfolio.jsx'
import Footer from '../component/footer/Footer.jsx'

function FullSite() {
  const mainRef = useRef(null);
  const aboutMeRef = useRef(null);
  const portfolioRef = useRef(null);
  const footerRef = useRef(null);

  return (
    <>
      <Navbar mainRef={mainRef} aboutMeRef={aboutMeRef} portfolioRef={portfolioRef} footerRef={footerRef}/>
      <div ref={mainRef}><Main/></div>
      <div ref={aboutMeRef}><AboutMe/></div>
      <Skills/>
      <div ref={portfolioRef}><Portfolio/></div>
      <div ref={footerRef}><Footer/></div>
    </>
  );
}


export default FullSite;
