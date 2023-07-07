import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer'; // Import react-intersection-observer
import './portfolio.css';

function Portfolio() {
  const containerRef = useRef();

  const [ref1, inView1] = useInView({
    triggerOnce: true, // The animation will run only once
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true, // The animation will run only once
  });

  // Define the animation
  const animationProps1 = useSpring({
    from: { transform: inView1 ? 'translateX(-50px)' : 'translateX(0px)', opacity: inView1 ? 0 : 1 },
    to: { transform: 'translateX(0px)', opacity: 1 },
    config: { duration: 1000 },
  });

  const animationProps2 = useSpring({
    from: { transform: inView2 ? 'translateX(-50px)' : 'translateX(0px)', opacity: inView2 ? 0 : 1 },
    to: { transform: 'translateX(0px)', opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <div className="portfolio--body">
      <div ref={containerRef} className='portfolio--container'>
        <div className='portfolio--title'>
          <img className='arrow-left' src="../../leftBottom-arrow.png" alt="" />
          <div>PORTFOLIO</div>
          <img className='arrow-right' src="../../rightBottom-arrow.png" alt="" />
        </div>

        <div className='portfolio--grid'>
          <animated.div ref={ref1} style={animationProps1}>
            <img src="../../bikersil.jpg" alt="" />
            <div className="hover-overlay">
              <div>Bikersil</div>
              <div className='hover--image'>
                <a href='https://bikersil.com/'>LIVE</a>
                <a href='https://github.com/gorzerk1/bikerfamily'>GitHub</a>
              </div>
              <div>CSS / JavaScript / React</div>
            </div> 
          </animated.div>
          <animated.div ref={ref2} style={animationProps2}>
            <img src="../../car_rental.png" alt="" />
            <div className="hover-overlay">
              <div>Car Rental</div>
              <div className='hover--image'>
                <a href='https://64a7b42c767f6900085bbdb3--glowing-churros-d0e1c4.netlify.app/'>LIVE</a>
                <a href='https://github.com/gorzerk1/e-cars'>GitHub</a>
              </div>
              <div>CSS / JavaScript / React</div>
            </div> 
          </animated.div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
