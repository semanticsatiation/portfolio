import React from "react";

function MainCards(params) {
    return (
        <ul className="mobile-projects">
            <li>
                <div className='flip-card'>
                    <div className="flip-card-inner">
                        <div className="flip-card-front" style={{backgroundImage: 'url(https://user-images.githubusercontent.com/74139058/200055158-6ba99272-db6e-411d-8132-e9223713aa59.png)'}}>
                            <div>
                                <h1>Client Portfolio</h1>
                            </div>
                        </div>
                        <div className="flip-card-back">
                            <p>Client portfolio built using WordPress.</p>
                                
                            <footer>
                                <a href="https://senolldonley.com/" target="_blank" rel="noreferrer noopener">Live Website</a>
                            </footer>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div className='flip-card'>
                    <div className="flip-card-inner">
                        <div className="flip-card-front" style={{backgroundImage: 'url(https://user-images.githubusercontent.com/74139058/172012433-04d6c22f-df66-4955-b314-a63f9e49ca35.jpg)'}}>
                            <div>
                                <h1>Bug Off</h1>
                            </div>
                        </div>
                        <div className="flip-card-back">
                            <p>Bug Off is an issue tracking application that keeps the bugs in your personal projects at bay.  Invite others to help improve your projects!</p>
                                
                            <footer>
                                <a href="https://bugoff.herokuapp.com/#/login" target="_blank" rel="noreferrer noopener">Live Website</a>
                                <a href="https://github.com/semanticsatiation/semanticsatiation.github.io" target="_blank" rel="noreferrer noopener">Github</a>
                            </footer>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div className='flip-card'>
                    <div className="flip-card-inner">
                        <div className="flip-card-front" style={{backgroundImage: 'url(https://user-images.githubusercontent.com/74139058/172012440-6fa162a3-ab2e-4faf-8ba3-aa2b650217dd.jpg)'}}>
                            <div>
                                <h1>Chess</h1>
                            </div>
                        </div>
                        <div className="flip-card-back">
                            <p>Playable version of chess.</p>
                                
                            <footer>
                                <a href="https://chess-app-semantic.herokuapp.com/" target="_blank" rel="noreferrer noopener">Live Website</a>
                                <a href="https://github.com/semanticsatiation/chess" target="_blank" rel="noreferrer noopener">Github</a>
                            </footer>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div className='flip-card'>
                    <div className="flip-card-inner">
                        <div className="flip-card-front" style={{backgroundImage: 'url(https://user-images.githubusercontent.com/74139058/172012437-f9f92694-48f1-42d9-bc35-98a99735f204.jpg)'}}>
                            <div>
                                <h1>Path Finder</h1>
                            </div>
                        </div>
                        <div className="flip-card-back">
                            <p>Path Finder is an application that helps users visualize/compare different maze algorithms.</p>
                                
                            <footer>
                                <a href="https://maze-solver-semantic.herokuapp.com/" target="_blank" rel="noreferrer noopener">Live Website</a>
                                <a href="https://github.com/semanticsatiation/maze-runner" target="_blank" rel="noreferrer noopener">Github</a>
                            </footer>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div className='flip-card'>
                    <div className="flip-card-inner">
                        <div className="flip-card-front" style={{backgroundImage: 'url(https://user-images.githubusercontent.com/74139058/144053740-b69c842b-538c-4ebc-b933-b827266b39d3.png)'}}>
                            <div>
                                <h1>Minesweeper</h1>
                            </div>
                        </div>
                        <div className="flip-card-back">
                            <p>Playable version of the classic game Minesweeper</p>
                                
                            <footer>
                                <a href="https://semantic-mine-sweeper.herokuapp.com/" target="_blank" rel="noreferrer noopener">Live Website</a>
                                <a href="https://github.com/semanticsatiation/minesweeper" target="_blank" rel="noreferrer noopener">Github</a>
                            </footer>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div className='flip-card'>
                    <div className="flip-card-inner">
                        <div className="flip-card-front" style={{backgroundImage: 'url(https://user-images.githubusercontent.com/74139058/172012435-875c5723-4501-42f6-8185-7357523814bd.jpg)'}}>
                            <div>
                                <h1>Movie Studio</h1>
                            </div>
                        </div>
                        <div className="flip-card-back">
                            <p>Movie application that allows users to review movies and allows admins to add movies.</p>
                                
                            <footer>
                                <a href="https://flix-movies.herokuapp.com/" target="_blank" rel="noreferrer noopener">Live Website</a>
                                <a href="https://github.com/semanticsatiation/movie-app" target="_blank" rel="noreferrer noopener">Github</a>
                            </footer>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div className='flip-card'>
                    <div className="flip-card-inner">
                        <div className="flip-card-front" style={{backgroundImage: 'url(https://user-images.githubusercontent.com/74139058/139915710-9c62c30c-84f8-4044-ac18-ec839607fb2e.png)'}}>
                            <div>
                                <h1>New York Times</h1>
                            </div>
                        </div>
                        <div className="flip-card-back">
                            <p>Single page website that mocks the New York Times (2019).</p>
                                
                            <footer>
                                <a href="https://fast-wildwood-33035.herokuapp.com/" target="_blank" rel="noreferrer noopener">Live Website</a>
                                <a href="https://github.com/semanticsatiation/new-york-times-mock-page" target="_blank" rel="noreferrer noopener">Github</a>
                            </footer>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    )
}

export default MainCards;