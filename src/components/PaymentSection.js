import React, { useState } from "react";
import '../App.css'
import FooterWhite from './FooterWhite.js'
import { useNavigate } from "react-router-dom";
import {useUserDetailsContext} from "./UserContext"
import { useEffect } from "react";

function PaymentSection(){
const navigate=useNavigate()
const {values}=useUserDetailsContext();
const [comments,setComments]=useState()
const [cardDetails,setCardDetails]=useState({
    cardNumber:'',
    cardHolder:'',
    ExpDate:'',
    CVV:''
    }
)
const [cardErrors,setCardErrors]=useState({});
const [isSubmit,setIsSubmit]=useState(false)

const handleChangeCard=(e)=>{
    setCardDetails({...cardDetails, [e.target.name]: e.target.value})
}
const handleSubmitCard=(e)=>{
    e.preventDefault();
    setCardErrors(validate(cardDetails));
    setIsSubmit(true);
 }
console.log(comments)
console.log(cardDetails)

const validate = (details) => {
    const errors = {};
    if (!details.cardNumber) {
    errors.cardNumber = 'Card number is required';
    } else if (!/^[0-9]{12}/i.test(cardDetails.cardNumber)) {
    errors.cardNumber = 'Invalid card number';
    }
    if (!details.cardHolder) {
    errors.cardHolder = 'Card holder is required';
    }
    if (!details.ExpDate) {
    errors.ExpDate = 'Expiry date is required';
      }
    if (!details.CVV) {
    errors.CVV = 'CVV is required';
    } else if (!/^[0-9]{3}/i.test(cardDetails.CVV)) {
    errors.CVV = 'Invalid CVV';
    }
    return errors;
  };

  useEffect(()=>{
    console.log(cardErrors)
    if(Object.keys(cardErrors).length===0 && isSubmit){
    navigate("/bookingconfirmation")
    }
 },[cardErrors])

    return (
        <div className="paymentpage">
            <div className="payment">
                <div className="payside">
                    <div className="paytitle">
                        <h1>Little Lemon</h1>
                        <p>Chicago</p>
                        <h3>Booking details</h3>
                    </div>
                    <div className="payaddinfo">
                        <fieldset id="paybookingconf">
                            {/* boc shadow :inset 1px 1px 3px #3333 */}
                            <p> Date:<span style={{fontWeight:"bolder", }}>{values.date}</span><br/>
                                Time: <span style={{fontWeight:"bolder", }}>{values.time}</span><br/>
                                Number of diners: <span style={{fontWeight:"bolder", }}>{values.diners}</span><br/>
                                Ocassion: <span style={{fontWeight:"bolder", }}>{values.occasion}</span><br/>
                                Seating: {values.standard?"Inside":"Outside" }
                            </p>
                        </fieldset>
                        <textarea
                        name="comments"
                        rows="5"
                        cols="10"
                        maxLength={250}
                        placeholder="Add any allergies/special request etc. regarding your booking"
                        value={comments}
                        onChange={(e)=>setComments(e.target.value)}>
                        </textarea>
                    </div>
                </div>
                <div className="payform">
                    <form onSubmit={handleSubmitCard}>
                        <h3>Credit Card details</h3>
                        <div className="payfield">
                        <label htmlFor="cardNumber">Card number * </label>
                            <input
                            type="tel"
                            id="cardNumber"
                            name="cardNumber"
                            placeholder="xxxx xxxx xxxx xxxx"
                            value={cardDetails.cardNumber}
                            onChange={handleChangeCard}
                            />
                            <span>{cardErrors.cardNumber}</span><br/>
                        </div>
                        <div className="payfield">
                            <label htmlFor="cardHolder">CardHolder*</label>
                            <input
                            type="text"
                            id="cardHolder"
                            name="cardHolder"
                            placeholder="*First Name/Last Name"
                            value={cardDetails.cardHolder}
                            onChange={handleChangeCard}
                             />
                            <span>{cardErrors.cardHolder}</span><br/>
                        </div>
                        <div className="paycvv">
                            <div className="payfield">
                                <label htmlFor="ExpDate">Exp. Date*</label>
                                <input
                                type="date"
                                id="ExpDate"
                                name="ExpDate"
                                placeholder="*MM/YY"
                                value={cardDetails.ExpDate}
                                onChange={handleChangeCard}
                                />
                                <span>{cardErrors.ExpDate}</span><br/>
                            </div>
                            <div className="payfield">
                                <label htmlFor="CVV">CVV*</label>
                                <input
                                type="tel"
                                id="CVV"
                                name="CVV"
                                placeholder="xxx"
                                maxLength="3"
                                value={cardDetails.CVV}
                                onChange={handleChangeCard}
                                />
                                <span>{cardErrors.CVV}</span><br/>
                            </div>
                        </div>
                        <div className="payconfirmation">
                            <div  className="payconf">
                                <label htmlFor="textconfirm">Send me a booking confirmation via text</label>
                                <input type="checkbox" id="textconfirm" name="textconfirm" value="textconfirm"/>
                            </div>
                            <div className="payconf">
                                <label htmlFor="emailconfirm">Send me a booking confirmation via email</label>
                                <input type="checkbox" id="emailconfirm" name="emailconfirm" value="emailconfirm"/>
                            </div>
                        </div>
                        <button>Reserve a table</button>
                    </form>
                </div>
            </div>
            <div className="footeWhite"><FooterWhite/></div>
        </div>
    )
}

export default PaymentSection;