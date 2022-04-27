import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './css/App.css';
import { useEffect, useState } from 'react';
import Star from './components/stars/star';
import Rocket from './components/icons/rocket';
import Flame from './components/icons/flame';
import About from './components/home_sections/about';
import Projects from './components/home_sections/projects';
import FloatingAstronaut from './components/icons/floating_astronaut';
import Planet from './components/icons/planet';

const starsAmount = 50;

function App() {
  const [windowSize, setWindowSize] = useState({
    width:  window.innerWidth,
    height:  window.innerHeight
  });

  const [showAboutSection, setShowAboutSection] = useState(true);

  const [speed, setSpeed] = useState(2);

  const [isWarp, setIsWarp] = useState(false);

  const [isTraveling, setIsTraveling] = useState(false);

  const [exposePlanetAfar, setExposePlanetAfar] = useState(false);

  const [exposePlanetClose, setExposePlanetClose] = useState(false);

  const [rocketClass, setRocketClass] = useState("flying-rocket");

  const [mountainClassAction, setMountainClassAction] = useState("");
  const [aboutActionClassAction, setAboutClassAction] = useState("");

  const [showProjectsSection, setShowProjectsSection] = useState(false);

  const handleResize = () => {
    setWindowSize({...windowSize, width: window.innerWidth, height: window.innerHeight});
  }
    
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    let currentInterval;
    if (isTraveling && speed >= 100) {
      currentInterval = setInterval(() => {
        clearInterval(currentInterval);
    
        setSpeed(2);
      }, 3000);
    }

    return () => {
      clearInterval(currentInterval);
    }
  }, [speed]);

  const showProjects = () => {
    if (!isTraveling && showAboutSection) {
      setShowAboutSection(false);
      setIsTraveling(true);
      setSpeed(0);

      setTimeout(() => {
        setIsWarp(true);
        setTimeout(() => {
          setExposePlanetAfar(true);
          setIsWarp(false);
          setSpeed(100);

          setTimeout(() => {
            setExposePlanetAfar(false);
            setExposePlanetClose(true);

            setTimeout(() => {
              setExposePlanetClose(false);
              setRocketClass("off-screen-rocket");

              setTimeout(() => {
                setRocketClass("landing-rocket");
                setShowProjectsSection(true);

                setTimeout(() => {
                  setRocketClass("hidden");
                  setIsTraveling(false);
                }, 2000);
              }, 1000);
            }, 1500);
          }, 1500);
        }, 3000);
      }, 1500);
    }
  }

  const showAbout = () => {
    if (!isTraveling && !showAboutSection) {
      setIsTraveling(true);
      setShowAboutSection(true);
      setAboutClassAction("pan-in");
      setMountainClassAction("pan-out");

      setTimeout(() => {
        setShowProjectsSection(false);
        setIsTraveling(false);
        setAboutClassAction("");
        setMountainClassAction("");
        setRocketClass("flying-rocket");
        setIsTraveling(false);
      }, 5000);
    }
  }

  return (
    <div className="home-container">
      <div className="star-field">{
        Array(starsAmount).fill().map((star, ind) => (
          <Star key={ind} isWarp={isWarp} top={Math.floor((Math.random() * windowSize.height) + 1)} left={Math.floor((Math.random() * windowSize.width) + 1)} index={ind} speed={speed} starFieldWidth={windowSize.width} starFieldHeight={windowSize.height} />
        ))
      }</div>

      {
        showAboutSection === false ? (
          <div className={rocketClass}>
            <Rocket/>
            <div className={`flames ${isWarp || speed === 100 ? ("warp") : ("")}`}>
              <Flame/>
              <Flame/>
              <Flame/>
            </div>
          </div>
        ) : (null)
      }

      
      {
        exposePlanetAfar || exposePlanetClose ? (<Planet type={exposePlanetAfar ? ('far-planet') : ('close-planet')} />) : (null)
      }

      {
        speed === 100 ? (
          null
        ) : (
          <FloatingAstronaut />
        )
      }

      <nav className='home-links'>
        <a className="glow" onClick={showAbout}>About</a>
        <a href="https://docs.google.com/document/d/1DQPFYJIr2aiuMMZvjc8Qi7Gps8EPxye81WBZCx3o1Fw/edit?usp=sharing" className="glow">Resume</a>
        <a className="glow" onClick={showProjects}>Projects</a>
      </nav>

      {showAboutSection ? (<div className={`about-container ${aboutActionClassAction}`}><About/></div>) : (null)}

      {showProjectsSection ? (<div className={`mountain-content ${mountainClassAction}`}><Projects/></div>) : (null)}

      <footer>
        <a className="icon-container" href="https://www.linkedin.com/in/benjamin-candelario-298449219/"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a className="icon-container" href="https://github.com/semanticsatiation"><FontAwesomeIcon icon={faGithubSquare} /></a>
      </footer>
    </div>
  );
}

export default App;
