import React from "react";
import Astronaut from "../icons/astronaut";
import FloatingAstronaut from "../icons/floating_astronaut";
import Planet from "../icons/planet";
import Rocket from "../icons/rocket";

function Credits(params) {
    return (
        <ul className="credit-images">
            <li ><Astronaut/><a className="glow" href="´https://www.vecteezy.com/vector-art/2084185-cute-astronaut-character-holding-flag-cartoon-vector-icon-illustration" target="_blank" rel="noreferrer noopener">- source</a></li>
            <li><Rocket/><a className="glow" href="´https://www.svgheart.com/product/rocket-free-svg-cut-file/" target="_blank" rel="noreferrer noopener">- source</a></li>
            <li><FloatingAstronaut/><a className="glow" href="´https://www.freepik.com/free-vector/cute-astronaut-jumping-with-metal-hands-cartoon-vector-icon-illustration-science-technology-icon-concept-isolated-premium-vector-flat-cartoon-style_22824530.htm#query=astronaut&position=33&from_view=search" target="_blank" rel="noreferrer noopener">- source</a></li>
            <li><Planet/><a className="glow" href="´https://www.vecteezy.com/vector-art/1895032-planet-earth-isolated-icon" target="_blank" rel="noreferrer noopener">- source</a></li>
        </ul>
    )
}

export default Credits;