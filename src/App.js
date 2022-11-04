import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './css/App.css';
import { useEffect, useState } from 'react';
import Star from './components/stars/star';
import Rocket from './components/icons/rocket';
import Flame from './components/icons/flame';
import About from './components/home_sections/about';
import Skills from './components/home_sections/skills';
import Projects from './components/home_sections/projects';
import FloatingAstronaut from './components/icons/floating_astronaut';
import Planet from './components/icons/planet';
import Credits from './components/home_sections/credits';
import Hamburger from './components/icons/hamburger';

const aboutLink = "about";
const projectsLink = "projects";
const creditsLink = "credits";
const skillsLink = "skills";

export const defaultProject = {title: "Bug Off", description: "Bug Off is an issue tracking application that keeps the bugs in your personal projects at bay.  Invite others to help improve your projects!", image: "https://user-images.githubusercontent.com/74139058/172012433-04d6c22f-df66-4955-b314-a63f9e49ca35.jpg", link: "https://bugoff.herokuapp.com/#/login", alt: "bug off log in", github: "https://github.com/semanticsatiation/semanticsatiation.github.io"};

function App() {
  const [windowSize, setWindowSize] = useState({
    width:  window.innerWidth,
    height:  window.innerHeight
  });

  const [starsAmount, setStarsAmount] = useState(10);

  const [showAboutSection, setShowAboutSection] = useState(true);

  const [showSkillsSection, setShowSkillsSection] = useState(false);

  const [showCreditSection, setShowCreditSection] = useState(false);

  const [showProjectsSection, setShowProjectsSection] = useState(false);

  const [speed, setSpeed] = useState(2);

  const [isWarp, setIsWarp] = useState(false);

  const [isTraveling, setIsTraveling] = useState(false);

  const [exposePlanetAfar, setExposePlanetAfar] = useState(false);

  const [exposePlanetClose, setExposePlanetClose] = useState(false);

  const [rocketClass, setRocketClass] = useState("flying-rocket");

  const [mountainClassAction, setMountainClassAction] = useState("");

  const [aboutClassAction, setAboutClassAction] = useState("");

  const [skillsClassAction, setSkillsClassAction] = useState("");

  const [creditsClassAction, setCreditsClassAction] = useState("");

  const [currentLink, setCurrentLink] = useState(aboutLink);

  const [skipWarp, setSkipWarp] = useState(false);

  const [mainProject, setMainProject] = useState(defaultProject);

  const [hideMenu, setHideMenu] = useState(true);

  const handleResize = () => {
    setWindowStars();

    setWindowSize({...windowSize, width: window.innerWidth, height: window.innerHeight});
  }

  const setWindowStars = () => {
    if (window.innerWidth <= 280) {
      setStarsAmount(10);
    } else if (window.innerWidth > 280 && window.innerWidth <= 2000) {
      setStarsAmount(15);
    } else if (window.innerWidth > 2000) {
      setStarsAmount(20);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    setWindowStars();

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
        setWindowStars();
      }, 3000);
    }

    return () => {
      clearInterval(currentInterval);
    }
  }, [speed]);

  const showProjects = () => {
    if (!isTraveling && !showProjectsSection) {
      setIsTraveling(true);
      setCurrentLink(projectsLink);

      if (!skipWarp) {
        setShowAboutSection(false);
        setShowSkillsSection(false);
        setShowCreditSection(false);
        setSpeed(0);
        setStarsAmount(18);

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
                    setRocketClass("remove");
                    setIsTraveling(false);
                    setSkipWarp(true);
                  }, 2000);
                }, 1000);
              }, 1500);
            }, 1500);
          }, 3000);
        }, 1500);
      } else {
        setShowProjectsSection(true);
        setAboutClassAction("pan-out");
        setSkillsClassAction("pan-out");
        setCreditsClassAction("pan-out");
        setTimeout(() => {
          setShowAboutSection(false);
          setShowSkillsSection(false);
          setShowCreditSection(false);
          setIsTraveling(false);
          setSkipWarp(true);
        }, 2000);
      }
    }
  }

  const showAbout = () => {
    if (!isTraveling && !showAboutSection) {
      setIsTraveling(true);
      setShowAboutSection(true);
      setAboutClassAction("pan-in-about");
      setMountainClassAction("pan-out");
      setCreditsClassAction("pan-out");
      setSkillsClassAction("pan-out");
      setCurrentLink(aboutLink);

      setTimeout(() => {
        setIsTraveling(false);
        setShowProjectsSection(false);
        setShowCreditSection(false);
        setShowSkillsSection(false);
        setAboutClassAction("");
        setMountainClassAction("");
        setSkillsClassAction("");
        setRocketClass("flying-rocket");
        setIsTraveling(false);
      }, 3000);
    }
  }

  const showSkills = () => {
    if (!isTraveling && !showSkillsSection) {
      setIsTraveling(true);
      setShowSkillsSection(true);
      setCurrentLink(skillsLink);
      setAboutClassAction("pan-out");
      setMountainClassAction("pan-out");
      setCreditsClassAction("pan-out");
      setSkillsClassAction("pan-in-about");

      setTimeout(() => {
        setIsTraveling(false);
        setShowProjectsSection(false);
        setShowAboutSection(false);
        setShowCreditSection(false);
        setAboutClassAction("");
        setMountainClassAction("");
        setCreditsClassAction("");
        setRocketClass("flying-rocket");
      }, 3000);
    }
  }

  const showCredits = () => {
    if (!isTraveling && !showCreditSection) {
      setIsTraveling(true);
      setShowCreditSection(true);
      setCurrentLink(creditsLink);
      setAboutClassAction("pan-out");
      setMountainClassAction("pan-out");
      setSkillsClassAction("pan-out");
      setCreditsClassAction("pan-in-credits");

      setTimeout(() => {
        setIsTraveling(false);
        setShowProjectsSection(false);
        setShowAboutSection(false);
        setShowSkillsSection(false);
        setAboutClassAction("");
        setSkillsClassAction("");
        setMountainClassAction("");
        setRocketClass("flying-rocket");
      }, 3000);
    }
  }

  const setMenu = (state) => {
    if (window.innerWidth < 500) {
      setHideMenu(state);
    }
  }

  const Links = <>
    <a className={`glow ${currentLink === aboutLink ? ("current-link") : ("")}`} onClick={showAbout}>About</a>
    <hr/>
    <a className={`glow ${currentLink === skillsLink ? ("current-link") : ("")}`} onClick={showSkills}>Skills</a>
    <hr/>
    <a className="glow" href="https://docs.google.com/document/d/1DQPFYJIr2aiuMMZvjc8Qi7Gps8EPxye81WBZCx3o1Fw/edit?usp=sharing" target="_blank" rel="noreferrer noopener">Resume</a>
    <hr/>
    <a className={`glow ${currentLink === projectsLink ? ("current-link") : ("")}`} onClick={showProjects}>Projects</a>
    <hr/>
    <a className={`glow ${currentLink === creditsLink ? ("current-link") : ("")}`} onClick={showCredits}>Credits</a>
  </>

  return (
    <div className="home-container">
      <div className="star-field">{
        Array(starsAmount).fill().map((star, ind) => (
          <Star key={ind} isWarp={isWarp} top={Math.floor((Math.random() * windowSize.height) + 1)} left={Math.floor((Math.random() * windowSize.width) + 1)} index={ind} speed={speed} starFieldWidth={windowSize.width} starFieldHeight={windowSize.height} />
        ))
      }</div>

      {
        !showSkillsSection && !showAboutSection && !showCreditSection && !skipWarp ? (
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
        speed === 100 || showCreditSection || showSkillsSection ? (
          null
        ) : (
          <FloatingAstronaut />
        )
      }

      <nav className='home-links' onMouseLeave={e => setMenu(true)} onClick={e => setMenu(!hideMenu)}>

        {
          window.innerWidth < 500 ? (
            <>
              <div className={hideMenu ? "remove" : "expose-home-links"}>
               {Links}
              </div>
              <Hamburger/>
            </>
          ) : (
            <>
              {Links}
            </>
          )
        }
      </nav>

      <div className="ghost-div"></div>

      {showAboutSection ? (<div className={`about-container ${aboutClassAction}`}><About/></div>) : (null)}

      {showSkillsSection ? (<div className={`skills-container ${skillsClassAction}`}><Skills/></div>) : (null)}

      {showProjectsSection ? (
        <div className={`mountain-content ${mountainClassAction}`}>
          <div className='flip-card'>
            <div className="flip-card-inner">
              <div className="flip-card-front" style={{backgroundImage: 'url(' + mainProject.image + ')'}}>
                <div>
                  <h1>{mainProject.title}</h1>
                </div>
              </div>
              <div className="flip-card-back">
                <p>{mainProject.description}</p>
                  
                <footer>
                  <a href={mainProject.link} target="_blank" rel="noreferrer noopener">Live Website</a>
                  {
                    mainProject.github ? (
                      <a href={mainProject.github} target="_blank" rel="noreferrer noopener">Github</a>
                    ) : (null)
                  }
                </footer>
              </div>
            </div>
          </div>
          <Projects setMainProject={setMainProject}/>
        </div>
      ) : (null)}

      {showCreditSection ? (<div className={creditsClassAction}><Credits/></div>) : (null)}

      <footer>
        <a className="icon-container" href="https://www.linkedin.com/in/benjamin-candelario-298449219/"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a className="icon-container" href="https://github.com/semanticsatiation"><FontAwesomeIcon icon={faGithubSquare} /></a>
      </footer>
    </div>
  );
}

export default App;
