import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import './skills.css';

function Skills() {
  const [refReact, inViewReact] = useInView({ triggerOnce: true });
  const [refJavaScript, inViewJavaScript] = useInView({ triggerOnce: true });
  const [refCSS, inViewCSS] = useInView({ triggerOnce: true });  // Changed here
  const [refPython, inViewPython] = useInView({ triggerOnce: true });

  const animationReact = useSpring({
    transform: inViewReact ? 'scale(1)' : 'scale(0.01)',
    config: { duration: 500 },
  });

  const animationJavaScript = useSpring({
    transform: inViewJavaScript ? 'scale(1)' : 'scale(0.01)',
    config: { duration: 500 },
  });

  const animationCSS = useSpring({  // Changed here
    transform: inViewCSS ? 'scale(1)' : 'scale(0.01)',  // Changed here
    config: { duration: 500 },
  });

  const animationPython = useSpring({
    transform: inViewPython ? 'scale(1)' : 'scale(0.01)',
    config: { duration: 500 },
  });

  return (
    <div className="skills--body">
      <div className={`skills-container`}>
        <animated.div ref={refReact} className='skills--box' style={animationReact}>
          <img src="../../react.png" alt="" />
          <div>React</div>
        </animated.div>
        <animated.div ref={refJavaScript} className='skills--box' style={animationJavaScript}> 
          <img src="../../javaScript.png" alt="" />
          <div>JavaScript</div>
        </animated.div>
        <animated.div ref={refCSS} className='skills--box' style={animationCSS}>
          <img src="../../css.png" alt="" /> 
          <div>CSS</div>
        </animated.div>
        <animated.div ref={refPython} className='skills--box' style={animationPython}>
          <img src="../../python.png" alt="" />
          <div>Python</div>
        </animated.div>
      </div>
    </div>
  );
}

export default Skills;
