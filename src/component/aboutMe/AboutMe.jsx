import './aboutMe.css';

function AboutMe() {

  return (
    <div className="aboutMe--body">
      <div className='aboutMe--container'>
        <div className='aboutMe--leftContainer'></div>
        <div className='aboutMe--rightContainer'>
        <h3>ABOUT ME</h3>
        <p>I'm someone who has taught myself how to build websites because I simply love doing it.
           My goal is always to learn as much as I can.
           Even when it gets tough, I never back down from a good challenge.
           That's because every new thing I learn helps me build better and more interesting websites.
        </p>
        <p>
        But it's not all work for me. 
        When I'm not learning or building, I like to kick back with a good game of Dota 2. 
        It's my perfect way to unwind and have some fun!
        </p>
        <div className='aboutMe--information'>
          <div className='aboutMe--smallContainer'>
            <div>Name</div>
            <div>Dima Dubinin</div>
          </div>
          <div className='aboutMe--smallContainer'>
            <div>Email</div>
            <div>drakingin@gmail.com</div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
