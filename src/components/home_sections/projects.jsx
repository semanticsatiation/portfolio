import React from "react";
import { defaultProject } from "../../App";
import Astronaut from "../icons/astronaut";
import Rocket from "../icons/rocket";
import MainCards from "./mobile_projects";

function Projects({setMainProject}) {
    return (
        <>
            <ul className="projects-list">
                <li>
                    <a onClick={e => setMainProject(defaultProject)} target="_blank" rel="noreferrer noopener">
                        <img src="https://user-images.githubusercontent.com/74139058/172012433-04d6c22f-df66-4955-b314-a63f9e49ca35.jpg" alt="bug off log in"/>
                    </a>
                </li>
                <li>
                    <a onClick={e => setMainProject({title: "Client Portfolio", description: "Client portfolio built using WordPress.", image: "https://user-images.githubusercontent.com/74139058/200055158-6ba99272-db6e-411d-8132-e9223713aa59.png", link: "https://senolldonley.com/", alt: "Actor's Portfolio"})} target="_blank" rel="noreferrer noopener">
                        <img src="https://user-images.githubusercontent.com/74139058/200055158-6ba99272-db6e-411d-8132-e9223713aa59.png" alt="actor's portfolio page"/>
                    </a>
                </li>
                <li>
                    <a onClick={e => setMainProject({title: "Chess", description: "Playable version of chess.", image: "https://user-images.githubusercontent.com/74139058/172012440-6fa162a3-ab2e-4faf-8ba3-aa2b650217dd.jpg", link: "https://chess-app-semantic.herokuapp.com/", alt: "chess game", github: "https://github.com/semanticsatiation/chess"})} target="_blank" rel="noreferrer noopener">
                        <img src="https://user-images.githubusercontent.com/74139058/172012440-6fa162a3-ab2e-4faf-8ba3-aa2b650217dd.jpg" alt="chess game"/>
                    </a>
                </li>
                <li>
                    <a onClick={e => setMainProject({title: "Path Finder", description: "Path Finder is an application that helps users visualize/compare different maze algorithms.", image: "https://user-images.githubusercontent.com/74139058/172012437-f9f92694-48f1-42d9-bc35-98a99735f204.jpg", link: "https://maze-solver-semantic.herokuapp.com/", alt: "maze solver", github: "https://github.com/semanticsatiation/maze-runner"})} target="_blank" rel="noreferrer noopener">
                        <img src="https://user-images.githubusercontent.com/74139058/172012437-f9f92694-48f1-42d9-bc35-98a99735f204.jpg" alt="solved maze"/>
                    </a>
                </li>
                <li>
                    <a onClick={e => setMainProject({title: "Minesweeper", description: "Playable version of the classic game Minesweeper.", image: "https://user-images.githubusercontent.com/74139058/144053740-b69c842b-538c-4ebc-b933-b827266b39d3.png", link: "https://semantic-mine-sweeper.herokuapp.com/", alt: "minesweeper game", github: "https://github.com/semanticsatiation/minesweeper"})} target="_blank" rel="noreferrer noopener">
                        <img src="https://user-images.githubusercontent.com/74139058/144053740-b69c842b-538c-4ebc-b933-b827266b39d3.png" alt="minesweeper game"/>
                    </a>
                </li>
                <li>
                    <a onClick={e => setMainProject({title: "Movie Studio", description: "Movie application that allows users to review movies and allows admins to add movies.", image: "https://user-images.githubusercontent.com/74139058/172012435-875c5723-4501-42f6-8185-7357523814bd.jpg", link: "https://flix-movies.herokuapp.com/", alt: "movie app", github: "https://github.com/semanticsatiation/movie-app"})} target="_blank" rel="noreferrer noopener">
                        <img src="https://user-images.githubusercontent.com/74139058/172012435-875c5723-4501-42f6-8185-7357523814bd.jpg" alt="movie app screenshot"/>
                    </a>
                    
                </li>
                <li>
                    <a onClick={e => setMainProject({title: "New York Times", description: "Single page website that mocks the New York Times (2019).", image: "https://user-images.githubusercontent.com/74139058/139915710-9c62c30c-84f8-4044-ac18-ec839607fb2e.png", link: "https://fast-wildwood-33035.herokuapp.com/", alt: "new york times mock page", github: "https://github.com/semanticsatiation/new-york-times-mock-page"})} target="_blank" rel="noreferrer noopener">
                        <img src="https://user-images.githubusercontent.com/74139058/139915710-9c62c30c-84f8-4044-ac18-ec839607fb2e.png" alt="new york times mock page screen shot"/>
                    </a>
                </li>
            </ul>

            <MainCards/>

            <div className="mountain-container">
                <img className="mountain" src="https://user-images.githubusercontent.com/74139058/141395678-2672719c-641e-4d53-8c2f-fbe14110216b.png" alt="mountain"/>
            </div>

            <div className="landed-rocket">
                <Rocket/>
            </div>

            <Astronaut id="landed-astronaut"/>
        </>
    )
}

export default Projects;