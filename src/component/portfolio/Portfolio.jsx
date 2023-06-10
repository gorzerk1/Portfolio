import React, { useRef, useState } from 'react';
import './portfolio.css';

function Portfolio() {
  const videoRef = useRef();
  const [timer, setTimer] = useState(null);

  const handleMouseOver = () => {
    videoRef.current.play();
    clearTimeout(timer); // clears the timer when the user hovers over the video
  };

  const handleMouseOut = () => {
    videoRef.current.pause();
    // sets a timer that will reset the video after 1 minute if the user doesn't hover over it again
    setTimer(setTimeout(() => {
      videoRef.current.currentTime = 0;
    }, 60000));
  };

  return (
    <div className="portfolio--body">
      <div className='portfolio--container'>
        <div className='portfolio--title'>
          <img src="../../rightBottom-arrow.png" alt="" />
          <div>PORTFOLIO</div>
          <img src="../../leftBottom-arrow.png" alt="" />
        </div>

        <div className='portfolio--grid'>
          <div>
            <video 
              ref={videoRef} 
              src="../../bikers.mp4" 
              loop 
              muted 
              className="portfolio-video" 
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
