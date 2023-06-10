import { useEffect, useRef, useState } from 'react';
import './skills.css';

function Skills() {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  const checkVisibility = () => {
    const rect = ref.current.getBoundingClientRect();
    const isVisible = rect.top <= window.innerHeight * 0.6;
    if(isVisible && !isAnimated) {
      setIsVisible(true);
      setIsAnimated(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkVisibility);
    return () => {
      window.removeEventListener('scroll', checkVisibility);
    };
  }, [isAnimated]);

  return (
    <div className="skills--body">
      <div className={`skills-container ${isVisible ? 'animate-back' : ''}`} ref={ref}>
        <div className='skills--box'>
          <img src="../../react.png" alt="" />
          <div>React</div>
        </div>
        <div className='skills--box'> 
          <img src="../../javaScript.png" alt="" />
          <div>JavaScript</div>
        </div>
        <div className='skills--box'>
          <img src="../../aws.png" alt="" />
          <div>AWS</div>
        </div>
        <div className='skills--box'>
          <img src="../../python.png" alt="" />
          <div>Python</div>
        </div>
        <div className='skills--box'>
          <img src="../../git.png" alt="" />
          <div>Git</div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
