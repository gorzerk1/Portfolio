import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import './footer.css';

function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true, // The animation will run only once
  });

  // Define the animation
  const animationProps = useSpring({
    from: { transform: inView ? 'scale(0.01)' : 'scale(1)' },
    to: { transform: 'scale(1)' },
    config: { duration: 1000 },
  });

  return (
    <div className="footer--body">
      <div className={`footer--container`}>
        <animated.a ref={ref} style={animationProps} href="https://github.com/gorzerk1" target="_blank" rel="noopener noreferrer">
          <img src="../../github.png" alt="github" />
        </animated.a>
        <animated.a ref={ref} style={animationProps} href="https://www.linkedin.com/in/dima-dubinin-7b7494251/" target="_blank" rel="noopener noreferrer">
          <img src="../../linkedin.png" alt="linkedin" />
        </animated.a>
        <animated.a ref={ref} style={animationProps} href="mailto:drakingin@gmail.com">
          <img src="../../email.png" alt="email" />
        </animated.a>
      </div>
      <div className='footer--rights'>
        All rights reserved © 2023 Dima Dubinin
      </div>
    </div>
  );
}

export default Footer;
