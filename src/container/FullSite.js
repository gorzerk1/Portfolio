import React, { useContext, useEffect, useRef } from 'react';
import Main from '../component/main/Main.jsx'
import Navbar from '../component/navbar/Navbar.jsx'
import AboutMe from '../component/aboutMe/AboutMe.jsx'
import Skills from '../component/skills/Skills.jsx'
import Portfolio from '../component/portfolio/Portfolio.jsx'
import Footer from '../component/footer/Footer.jsx'
import { MyContext } from '../data/ThemeProvider.jsx';

function FullSite() {
  const mainRef = useRef(null);
  const aboutMeRef = useRef(null);
  const portfolioRef = useRef(null);
  const footerRef = useRef(null);
  const { setImageKey } = useContext(MyContext);

  useEffect(() => {
    const currentMainRef = mainRef.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageKey(null); 
        } else {
          setImageKey(true);
        }
      },
      {
        root: null, 
        rootMargin: '0px', 
        threshold: 0.1 
      }
    );
    if(currentMainRef) { // Make sure the reference is not null before observing
      observer.observe(currentMainRef);
    }

    return () => {
      if(currentMainRef) { // Make sure the reference is not null before unobserving
        observer.unobserve(currentMainRef);
      }
    };
  }, [setImageKey]); // Added setImageKey to the dependency array

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
