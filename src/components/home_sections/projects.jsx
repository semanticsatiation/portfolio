import React from "react";
import Astronaut from "../icons/astronaut";
import Rocket from "../icons/rocket";

function Projects(params) {
    return (
        <>
            <ul className="projects-list">
                <li>
                    <a href="https://bugoff.herokuapp.com/#/login" target="_blank" rel="noreferrer noopener">
                        <h1>Bug Tracking App</h1>
                        <img src="https://user-images.githubusercontent.com/74139058/139449480-9c350a30-f7c3-4e83-960b-2df40375c6a6.png" alt="bug off log in"/>
                    </a>
                </li>
                <li>
                    <a href="https://chess-app-semantic.herokuapp.com/" target="_blank" rel="noreferrer noopener">
                        <h1>Chess Game</h1>
                        <img src="https://user-images.githubusercontent.com/74139058/148338957-ba49e070-113a-43c4-878b-170fb632d8ec.png" alt="chess game"/>
                    </a>
                </li>

                <li>
                    <a href="https://maze-solver-semantic.herokuapp.com/" target="_blank" rel="noreferrer noopener">
                        <h1>Maze Solving App</h1>
                        <img src="https://user-images.githubusercontent.com/74139058/153266555-3beaef03-4926-46a7-9370-91d337d69f28.png" alt="solved maze"/>
                    </a>
                </li>
                <li>
                    <a href="https://semantic-mine-sweeper.herokuapp.com/" target="_blank" rel="noreferrer noopener">
                        <h1>Minesweeper Game</h1>
                        <img src="https://user-images.githubusercontent.com/74139058/144053740-b69c842b-538c-4ebc-b933-b827266b39d3.png" alt="minesweeper game"/>
                    </a>
                </li>
                <li>
                    <a href="https://flix-movies.herokuapp.com/" target="_blank" rel="noreferrer noopener">
                        <h1>Movie App</h1>
                        <img src="https://user-images.githubusercontent.com/74139058/140382118-9cc3b1eb-d7be-4b85-94fc-e363bffb80b0.png" alt="movie app screenshot"/>
                    </a>
                    
                </li>
                <li>
                    <a href="https://fast-wildwood-33035.herokuapp.com/" target="_blank" rel="noreferrer noopener">
                        <h1>New York Times Mock Page</h1>
                        <img src="https://user-images.githubusercontent.com/74139058/139915710-9c62c30c-84f8-4044-ac18-ec839607fb2e.png" alt="new york times mock page screen shot"/>
                    </a>
                </li>
            </ul>

            <div className="mountain-container">
                <img className="mountain" src="https://user-images.githubusercontent.com/74139058/141395678-2672719c-641e-4d53-8c2f-fbe14110216b.png" alt="mountain"/>
            </div>

            <div className="landed-rocket">
                <Rocket/>
            </div>

            <Astronaut />
        </>
    )
}

export default Projects;