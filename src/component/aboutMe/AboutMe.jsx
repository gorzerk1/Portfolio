import React, {useState, useEffect} from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import './aboutMe.css';

function AboutMe() {
  const [trigger, setTrigger] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if(inView) {
      setTrigger(true);
    }
  }, [inView]);

  const animation1 = useSpring({
    delay: 0,
    opacity: trigger ? 1 : 0,
    transform: trigger ? `translateY(0)` : `translateY(150px)`,
    config: {
      mass: 1,
      tension: 50,
      friction: 20
    },
  });

  const animation2 = useSpring({
    delay: 500,
    opacity: trigger ? 1 : 0,
    transform: trigger ? `translateY(0)` : `translateY(150px)`,
    config: {
      mass: 1,
      tension: 50,
      friction: 20
    },
  });

  const animation3 = useSpring({
    delay: 1000,
    opacity: trigger ? 1 : 0,
    transform: trigger ? `translateY(0)` : `translateY(150px)`,
    config: {
      mass: 1,
      tension: 50,
      friction: 20
    },
  });

  const animation4 = useSpring({
    delay: 1500,
    opacity: trigger ? 1 : 0,
    transform: trigger ? `translateY(0)` : `translateY(150px)`,
    config: {
      mass: 1,
      tension: 50,
      friction: 20
    },
  });
  

  return (
    <div className="aboutMe--body">
      <div className={`aboutMe--Container`} ref={ref} >
        <animated.div style={animation1}>ABOUT ME</animated.div>
        <animated.div style={animation2}>I'm someone who has taught myself how to build websites because I simply love doing it.
          My goal is always to learn as much as I can.
          Even when it gets tough, I never back down from a good challenge.
          That's because every new thing I learn helps me build better and more interesting websites.
        </animated.div>
        <animated.div style={animation3}>
          But it's not all work for me. 
          When I'm not learning or building, I like to kick back with a good game of Dota 2. 
          It's my perfect way to unwind and have some fun!
        </animated.div>
        <animated.div className='aboutMe--information' style={animation4}>
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
