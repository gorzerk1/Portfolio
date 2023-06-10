import { useEffect, useRef, useState } from 'react';
import './footer.css';

function Footer() {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(true);

  const checkVisibility = () => {
    const rect = ref.current.getBoundingClientRect();
    if (rect.bottom < window.innerHeight) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
    return () => {
      window.removeEventListener('scroll', checkVisibility);
    };
  }, []);

  return (
    <div className="footer--body">
      <div className={`footer--container ${isVisible ? '' : 'animate-back'}`} ref={ref}>
        <a href="https://github.com/gorzerk1" target="_blank" rel="noopener noreferrer">
          <img src="../../github.png" alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/dima-dubinin-7b7494251/" target="_blank" rel="noopener noreferrer">
          <img src="../../linkedin.png" alt="linkedin" />
        </a>
        <a href="mailto:drakingin@gmail.com">
          <img src="../../email.png" alt="email" />
        </a>
      </div>
      <div className='footer--rights'>
        All rights reserved © 2023 Dima Dubinin
      </div>
    </div>
  );
}

export default Footer;
