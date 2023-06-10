import React, { useRef, useState, useEffect } from 'react';
import './portfolio.css';

function Portfolio() {
  const videoRef = useRef();
  const [timer, setTimer] = useState(null);
  const containerRef = useRef();
  const [arrowClass, setArrowClass] = useState('arrow-move');
  const [videoClass, setVideoClass] = useState('flipped');  // Initially set class to 'flipped'

  const handleMouseOver = () => {
    videoRef.current.play();
    clearTimeout(timer);
  };

  const handleMouseOut = () => {
    videoRef.current.pause();
    setTimer(setTimeout(() => {
      videoRef.current.currentTime = 0;
    }, 60000));
  };

  useEffect(() => {
    const handleScroll = () => {
      const top = containerRef.current.getBoundingClientRect().top;
      if (top <= window.innerHeight * 0.6) {
        setArrowClass('');
        setVideoClass('');  // Set class to '' so the video flips back to its original state
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
            <video 
              ref={videoRef} 
              src="../../bikers.mp4" 
              loop 
              muted 
              className={`portfolio-video ${videoClass}`}  // Include the new videoClass
              onMouseOver={handleMouseOver} 
              onMouseOut={handleMouseOut}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;

