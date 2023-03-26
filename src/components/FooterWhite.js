import React from "react";
import '../App.css'
import logofooterwhite from "../assets/logofooterwhite.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook,faInstagram,faTiktok,} from "@fortawesome/free-brands-svg-icons";

function FooterWhite(){
  const handleClick=()=>{}

  const socials = [
      {
        icon: faEnvelope,
        url: "mailto: hello@example.com",
      },
      {
        icon: faFacebook,
        url: "https://facebook.com",
      },
      {
        icon: faInstagram,
        url: "https://www.instagram.com",
      },
      {
        icon: faTiktok,
        url: "https://www.tiktok.com",
      },
    ];
  return(
    <footer className="footerWhite">
      <img
      src={logofooterwhite}
      alt="Little Lemon logo"
      width={130}
      height={200}
      />
      <div className='footerWhiteInfo'>
        <ul className="footeWhiternav">
          <li><strong>Doormat Navigation</strong></li>
          <li><a href="." onClick={handleClick()}>Home </a></li>
          <li><a href="/about" onClick={handleClick()}>About</a></li>
          <li><a href="/menu" onClick={handleClick()}>Menu</a></li>
          <li><a href="/reservations" onClick={handleClick()}>Reservations</a></li>
          <li><a href="/onlineOrder" onClick={handleClick()}>Order Online</a></li>
          <li><a href="/login" onClick={handleClick()} >Login</a></li>
        </ul>
        <ul className="footerWhitercontact">
          <li><strong>Contact details</strong></li>
          <li>Phone number : 07546854669</li>
          <li>Email : LittleLemon@hotmail.com</li>
        </ul>
        <ul className="footerWhitersocials">
          <li><strong>Social Media</strong></li>
          <li>{socials.map(({url,icon}) => {
            return (
              <a key={url} href={url}>
              <FontAwesomeIcon icon={icon} key={url} size="2x"/>
              </a>)
            })}
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default FooterWhite;