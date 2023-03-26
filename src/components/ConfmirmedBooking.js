import React from 'react'
import '../App.css'
import {useUserDetailsContext} from "./UserContext"

export default function ConfmirmedBooking() {
  const {values}=useUserDetailsContext();
  const stylePage={
    display:"flex",
    flexDirection: "column",
    //width:"100%",
    backgroundColor: "#495E57",
    alignItems: "center",
    padding: "15em ",
    borderStyle: "double  #F4CE14"
  }
  const styleP={
    color: "#EDEFEE",
    fontSize: "40px",
    fontWeight: "medium",
    paddingBottom:"0.5em",
    textAlign:"center",
  }
  return (
    <div className="confirmationPage"
      style={stylePage}>
      <div className='confirmationDetails'
        style={{
          borderStyle:"solid",
          borderColor:" #F4CE14",
          padding:"2em",
        }}>
        <h1 style={{
            color: "#F4CE14",
            fontSize: "64px",
            fontWeight: "medium",
            textAlign:"center",
          }}
          >Little Lemon
          </h1>
            <p style={styleP}>Chicago</p>
            <h3 style={styleP}>Your booking is confirmed!!!</h3>
            <p style={styleP}>We are looking forward to see you on <span style={{fontWeight:"bolder", color:"#F4CE14"}}>{values.date}</span> at <span style={{fontWeight:"bolder",color:"#F4CE14"}}>{values.time}</span> !!! </p>
            <br/>
            <p style={styleP}>Thank you for your reservation!</p>
      </div>
    </div>
  )
}