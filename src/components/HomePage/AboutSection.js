import React from "react";
import '../../App.css'
import MarioAdrianA from '../../assets/MarioAdrianA.jpg'
import MarioAdrianB from '../../assets/MarioAdrianB.jpg'

function AboutSection(){
    return(
        <div className='about' id="about">
            <div className="aboutInfo">
                <article className="brand">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Little Lemon is a charming neighborhood bistro that
                        serves simple food and classic cocktails in a lively
                        but casual environment. The restaurant features a
                        locally-sourced menu with daily specials.
                    </p>
                </article>
            </div>
            <div className='aboutImg'>
                <img
                    src={MarioAdrianA}
                    alt="Mario and Adrian"
                    id="A"
                    >
                </img>
                <img
                    src={MarioAdrianB}
                    alt="Mario and Adrian"
                    id="B"
                    >
                </img>
            </div>
        </div>
    )
}

export default AboutSection;  