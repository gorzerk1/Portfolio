import { useState, useEffect } from 'react';
import './navbar.css';

function Navbar({ mainRef, aboutMeRef, portfolioRef, footerRef }) {
  const [scrolled, setScrolled] = useState(false);

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
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className={`Navbar--body${scrolled ? ' scrolled' : ''}`}>
      <div className="Navbar--container">
        <div className='Navbar--logo'>
          DDdev
        </div>
        <div className='Navbar--buttons'>
          <div className="navbar--link" onClick={() => scrollTo(mainRef)}>Home</div>
          <div className="navbar--link" onClick={() => scrollTo(aboutMeRef)}>About</div>
          <div className="navbar--link" onClick={() => scrollTo(portfolioRef)}>Portfolio</div>
          <div className="navbar--link" onClick={() => scrollTo(footerRef)}>Contact</div>
        </div>
      </div>
    </div>
  );
}


export default Navbar;

