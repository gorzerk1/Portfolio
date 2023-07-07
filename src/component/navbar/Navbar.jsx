import React, { useContext, useState, useEffect } from 'react';
import './navbar.css';
import { MyContext } from '../../data/ThemeProvider.jsx'; 

function Navbar({ mainRef, aboutMeRef, portfolioRef, footerRef }) {
  const { imageKey } = useContext(MyContext); // get imageKey from context
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);  // new state
  const [slideOut, setSlideOut] = useState(false); 


  function handleScroll() {
    if (window.scrollY > 300) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function scrollTo(ref) {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }

  return (
    <div className={`Navbar--body${scrolled ? ' scrolled' : ''}${imageKey ? ' Navbar--background' : ''}`}>
      <div className="Navbar--container">
        <div className='Navbar--logo'>
          Dima Dubinin
        </div>
        <div className='Navbar--buttons' style={{ display: showMenu ? 'none' : 'flex' }}>
          <div className="navbar--link" onClick={() => scrollTo(mainRef)}>Home</div>
          <div className="navbar--link" onClick={() => scrollTo(aboutMeRef)}>About</div>
          <div className="navbar--link" onClick={() => scrollTo(portfolioRef)}>Portfolio</div>
          <div className="navbar--link" onClick={() => scrollTo(footerRef)}>Contact</div>
          <div className="navbar--menu" onClick={() => setShowMenu(!showMenu)}>
            <img src="../../menu.png" alt="" />
          </div>
        </div>
        <div className={`navbar--menuScreen${showMenu ? ' show' : ''}${slideOut ? ' slideOut' : ''}`}>
            <div className='navbar--insideMenu' onClick={() => {scrollTo(mainRef); setShowMenu(false); setSlideOut(true);}}>Home</div>
            <div className='navbar--insideMenu' onClick={() => {scrollTo(aboutMeRef); setShowMenu(false); setSlideOut(true);}}>About</div>
            <div className='navbar--insideMenu' onClick={() => {scrollTo(portfolioRef); setShowMenu(false); setSlideOut(true);}}>Portfolio</div>
            <div className='navbar--insideMenu' onClick={() => {scrollTo(footerRef); setShowMenu(false); setSlideOut(true);}}>Contact</div>
        </div>
      </div>
    </div>
  );

}

export default Navbar;




