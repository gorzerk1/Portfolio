import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import './aboutMe.css';

function AboutMe() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? `translateY(0)` : `translateY(150px)`,
    config: {
      mass: 1, 
      tension: 50, 
      friction: 20
    },
  });

  return (
    <div className="aboutMe--body">
      <div className={`aboutMe--Container`} ref={ref} >
        <animated.div style={animation}>ABOUT ME</animated.div>
        <animated.div style={animation}>I'm someone who has taught myself how to build websites because I simply love doing it.
          My goal is always to learn as much as I can.
          Even when it gets tough, I never back down from a good challenge.
          That's because every new thing I learn helps me build better and more interesting websites.
        </animated.div>
        <animated.div style={animation}>
          But it's not all work for me. 
          When I'm not learning or building, I like to kick back with a good game of Dota 2. 
          It's my perfect way to unwind and have some fun!
        </animated.div>
        <animated.div className='aboutMe--information' style={animation}>
          <div className='aboutMe--smallContainer'>
            <div>Name</div>
            <div>Dima Dubinin</div>
          </div>
          <div className='aboutMe--smallContainer'>
            <div>Email</div>
            <div>dimadubinin292@gmail.com</div>
          </div>
        </animated.div>
      </div>
    </div>
  );
}

export default AboutMe;
