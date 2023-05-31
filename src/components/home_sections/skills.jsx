import React, { useState } from "react";
import Arrow from "../icons/arrow";

function Skills(params) {
    const [currentMenuState, setChangeCurrentMenuState] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false
    });

    const hideMenu = (menuNumber) => {
        setChangeCurrentMenuState({
            ...currentMenuState,
            [menuNumber]: !currentMenuState[menuNumber]
        });
    }

    return (
        <ul className="skills">
            <li>
                <h1 className="title" onClick={(e) => hideMenu(1)}>
                    Front-End
                    <Arrow position={currentMenuState[1] ? ("rotate") : ("")}/>
                </h1>
                <ul className={`category ${currentMenuState[1] ? ("hide-menu") : ("expose-menu")}`}>
                    <li>HTML5</li>
                    <li>CSS / SCSS / SASS / LESS</li>
                    <li>WebPack</li>
                    <li>React / Redux</li>
                    <li>Bootstrap</li>
                    <li>Angular</li>
                    <li>jQuery</li>
                    <li>Responsive Web Design</li>
                    <li>AJAX / APIs</li>
                    <li>Ruby on Rails</li>
                    <li>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" />
                    </li>
                </ul>
            </li>
            <li>
                <h1 className="title" onClick={(e) => hideMenu(2)}>
                    Back-End
                    <Arrow position={currentMenuState[2] ? ("rotate") : ("")}/>
                </h1>
                <ul className={`category ${currentMenuState[2] ? ("hide-menu") : ("expose-menu")}`}>
                    <li>PostGreSQL</li>
                    <li>NoSQL</li>
                    <li>NPM</li>
                    <li>Ruby on Rails</li>
                    <li>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg" />
                    </li>
                </ul>
            </li>
            <li>
                <h1 className="title" onClick={(e) => hideMenu(3)}>
                    Management
                    <Arrow position={currentMenuState[3] ? ("rotate") : ("")}/>
                </h1>
                <ul className={`category ${currentMenuState[3] ? ("hide-menu") : ("expose-menu")}`}>
                    <li>Git / GitHub</li>
                    <li>MVC Framework</li>
                    <li>AWS</li>
                    <li>Postman</li>
                    <li>JBuilder</li>
                    <li>Visual Studio Code / Atom</li>
                    <li>Object Oriented Programming</li>
                    <li>Heroku</li>
                    <li>Capybara / RSpec</li>
                    <li>REST APIs</li>
                    <li>
                        <img className="github" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/atom/atom-original.svg" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rspec/rspec-original.svg" />
                    </li>
                </ul>
            </li>
            <li>
                <h1 className="title" onClick={(e) => hideMenu(4)}>
                    Languages
                    <Arrow position={currentMenuState[4] ? ("rotate") : ("")}/>
                </h1>
                <ul className={`category ${currentMenuState[4] ? ("hide-menu") : ("expose-menu")}`}>
                    <li>JavaScript ES6</li>
                    <li>TypeScript</li>
                    <li>Ruby</li>
                    <li>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" />
                    </li>
                </ul>
            </li>
            <li>
                <h1 className="title" onClick={(e) => hideMenu(5)}>
                    Content Management systems
                    <Arrow position={currentMenuState[5] ? ("rotate") : ("")}/>
                </h1>
                <ul className={`category ${currentMenuState[5] ? ("hide-menu") : ("expose-menu")}`}>
                    <li>WordPress</li>
                    <li> 
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" />
                    </li>
                </ul>
            </li>
        </ul>
    )
}

export default Skills;