
import '../App.css'
import React from "react";
import logo from "../assets/logo.png"
import AboutSection from "./HomePage/AboutSection.js"
import ReserveSection from "./BookingPage.js"
import LoginSection from "./LoginSection.js"
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import HighlightsSection from './HomePage/HighlightsSection';
import PaymentSection from './PaymentSection';
import { useRef, useEffect } from 'react';
import ConfmirmedBooking from './ConfmirmedBooking';
import HeroSection from "./HomePage/HeroSection";
import TestimonialsSection from "./HomePage/TestimonialsSection";
import Footer from "./HomePage/Footer";
import Home from './HomePage/Home'

function Header(){

      const handleClick = (anchor) => () => {
        const id = `${anchor}`;
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      };

    return(
        <div className="header" >
            <Link to="/">
            <img
            src={logo}
            alt="Little Lemon logo"
            width={230}
            />
            </Link>
            <nav>
                 <ul className="navbar">
                    <Link to="/" className="nav-item" /*onMouseOver={changeBackground}*/>Home </Link>
                    <Link to="/about" className="nav-item" >About</Link>
                    <Link to="/menu" className="nav-item" >Menu</Link>
                    <Link to="/reservations" className="nav-item" >Reservations</Link>
                    <Link to="/onlineOrder" className="nav-item" >Order Online</Link>
                </ul>
            </nav>
            <Routes>
                  <Route path="/about" element={<AboutSection/>} />
                  <Route path="/menu" element={<HighlightsSection/>}/>
            </Routes>
        </div>
    )
}

export default Header;

