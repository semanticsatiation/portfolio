import React from "react";
import {useEffect} from 'react';

import Astronaut from "../icons/astronaut";
import Rocket from "../icons/rocket";
import Card from "../shared/card";
import Slider from "../../js/lib/slider";

function Projects() {

    useEffect(() => {
        new Slider();
      }, []);

    return (
        <>
            <div className="swiper mySwiper">
              <div className="swiper-wrapper">
                <div className='swiper-slide'>
                  <Card 
                    image="https://user-images.githubusercontent.com/74139058/200055158-6ba99272-db6e-411d-8132-e9223713aa59.png"
                    title="Client Portfolio"
                    description="Client portfolio built using WordPress."
                    link="https://senolldonley.com/"/>
                </div>

                <div className='swiper-slide'>
                  <Card 
                    title="Client Portfolio" 
                    description="Client portfolio built using WordPress." 
                    image="https://user-images.githubusercontent.com/74139058/203438183-d7685a95-bcd8-4376-b8ac-f443d260a0fd.png" 
                    link="https://erikdefrank.com/"/>
                </div>

                <div className='swiper-slide'>
                  <Card 
                    title="Bug Off"
                    description="Bug Off is an issue tracking application that keeps the bugs in your personal projects at bay.  Invite others to help improve your projects!"
                    image="https://user-images.githubusercontent.com/74139058/172012433-04d6c22f-df66-4955-b314-a63f9e49ca35.jpg"
                    link="https://bugoff.herokuapp.com/#/login"
                    github="https://github.com/semanticsatiation/semanticsatiation.github.io"/>
                </div>

                <div className='swiper-slide'>
                  <Card 
                    title="Path Finder"
                    description="Path Finder is an application that helps users visualize/compare different maze algorithms."
                    image="https://user-images.githubusercontent.com/74139058/172012437-f9f92694-48f1-42d9-bc35-98a99735f204.jpg"
                    link="https://maze-solver-semantic.herokuapp.com/"
                    github="https://github.com/semanticsatiation/maze-runner"/>
                </div>

                <div className='swiper-slide'>
                  <Card 
                    title="Chess"
                    description="Playable version of chess."
                    image="https://user-images.githubusercontent.com/74139058/172012440-6fa162a3-ab2e-4faf-8ba3-aa2b650217dd.jpg"
                    link="https://chess-app-semantic.herokuapp.com/"
                    github="https://github.com/semanticsatiation/chess"/>
                </div>

                <div className='swiper-slide'>
                  <Card 
                    title="Minesweeper"
                    description="Playable version of the classic game Minesweeper."
                    image="https://user-images.githubusercontent.com/74139058/144053740-b69c842b-538c-4ebc-b933-b827266b39d3.png"
                    link="https://semantic-mine-sweeper.herokuapp.com/"
                    github="https://github.com/semanticsatiation/minesweeper"/>
                </div>

                <div className='swiper-slide'>
                  <Card 
                    title="Movie Studio"
                    description="Movie application that allows users to review movies and allows admins to add movies."
                    image="https://user-images.githubusercontent.com/74139058/172012435-875c5723-4501-42f6-8185-7357523814bd.jpg"
                    link="https://flix-movies.herokuapp.com/"
                    github="https://github.com/semanticsatiation/movie-app"/>
                </div>

                <div className='swiper-slide'>
                  <Card 
                    title="New York Times"
                    description="Single page website that mocks the New York Times (2019)."
                    image="https://user-images.githubusercontent.com/74139058/139915710-9c62c30c-84f8-4044-ac18-ec839607fb2e.png"
                    link="https://fast-wildwood-33035.herokuapp.com/"
                    github="https://github.com/semanticsatiation/new-york-times-mock-page"/>
                </div>
              </div>

              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
              <div className="swiper-pagination"></div>
            </div>

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

