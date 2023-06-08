import './skills.css';

function Skills() {

  return (
    <div className="skills--body">
      <div className='skills-container'>
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
