import React from "react";

function Card({github, title, description, image, link}) {
    return (
        <div className='flip-card'>
            <div className="flip-card-inner">
                <div className={`flip-card-front ${title === "Client Portfolio" ? "reposition-background" : ""}`} style={{backgroundImage: 'url(' + image + ')'}}>
                    <div>
                        <h1>{title}</h1>
                    </div>
                </div>
                <div className="flip-card-back">
                    <p>{description}</p>
                    
                    <div>
                        <a href={link} target="_blank" rel="noreferrer noopener">Live Website</a>
                        {
                            github ? (
                            <a href={github} target="_blank" rel="noreferrer noopener">Github</a>
                            ) : (null)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;