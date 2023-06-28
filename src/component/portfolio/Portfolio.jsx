import React, { useRef, useState, useEffect } from 'react';
import './portfolio.css';

function Portfolio() {
  const containerRef = useRef();
  const [arrowClass, setArrowClass] = useState('arrow-move');

  useEffect(() => {
    const handleScroll = () => {
      const top = containerRef.current.getBoundingClientRect().top;
      if (top <= window.innerHeight * 0.6) {
        setArrowClass('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio--body">
      <div ref={containerRef} className='portfolio--container'>
        <div className='portfolio--title'>
          <img className={`arrow-left ${arrowClass}`} src="../../leftBottom-arrow.png" alt="" />
          <div>PORTFOLIO</div>
          <img className={`arrow-right ${arrowClass}`} src="../../rightBottom-arrow.png" alt="" />
        </div>

        <div className='portfolio--grid'>
          <div>
            <img src="../../bikersil.jpg" alt="" />
            <div className="hover-overlay">
              <div>Bikersil</div>
              <div className='hover--image'>
                <img 
                  src="../../enter.png" 
                  alt="" 
                  onClick={() => window.location.href = 'https://www.bikersil.com'}
                />
              </div>
              <div>CSS/JavaScript/React</div>
            </div> 
          </div>
          <div>
            <img src="../../car_rental.png" alt="" />
            <div className="hover-overlay">
              <div>Car Rental</div>
              <div className='hover--image'>
                <img 
                  src="../../enter.png" 
                  alt="" 
                  onClick={() => window.location.href = 'https://649b56c7f554ae0008c6e8ce--glowing-churros-d0e1c4.netlify.app/'}
                />
              </div>
              <div>CSS/JavaScript/React</div>
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
