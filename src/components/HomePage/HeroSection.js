import React from "react";
import '../../App.css'
import restaurantfood from "../../assets/restaurantfood.jpg"
import {Link} from 'react-router-dom';


function HeroSection(){

    return(
    <div className="hero" id="hero">
        <div className="heroInfo">
            <article>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p className="details">We are a family owned Mediterranean restaurant, focus on traditional recipes served in a modern twist.</p>
            </article>
            <div className="reservebtn">
                <Link to="/reservations">
                <button>Reserve a table</button>
                </Link>
            </div>
        </div>
        <img
            src={restaurantfood}
            alt="Little Lemon logo"
            >
        </img>
    </div>
    )
}

export default HeroSection;