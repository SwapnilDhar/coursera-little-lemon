import ReserveSection from "./BookingPage";
import FooterWhite from './FooterWhite.js'
import restaurantchefB from '../assets/restaurantchefB.jpg'
import restaurant from '../assets/restaurant.jpg'

function BookingForm(props){
    //values,handleChange,radioChange,formValidation,handleSubmit,timeSlots,dispatch
    return(
        <div className="reservepage">
            <div className="reserve">
                <section className="reserveside">
                    <div className="reservesideTitle">
                    <h1>Little Lemon</h1>
                    <p>Chicago</p>
                    </div>
                    <img src={restaurantchefB} id="Areserve" alt="chef cooking" ></img>
                    <img src={restaurant} id="Breserve" alt="restaurant's garden"></img>
                    <br></br>
                </section>
                <div className="reserveform">
                    <form onSubmit={props.handleSubmit}>
                        <h1>Find your table for any occassion</h1>
                        <div className="date">
                            <input
                            placeholder=" Date* "
                            type="text"
                            onFocus={(e) => (e.target.type = "date")}
                            onBlur={(e) => (e.target.type = "text")}
                            id="date"
                            name='date'
                            value={props.date}
                            onChange={props.handleChange}/>
                        </div>
                        <div className="time">
                            <select
                            id="time"
                            name="time"
                            value={props.time}
                            onChange={props.handleChange}
                            >
                                <option value="title">Time*</option>
                                {props.timeSlots.map((time,index)=>(
                                    <option key={index} style={{color:"black"}}>
                                        {time}
                                    </option>
                                ))}
                            </select>
                        <br></br>
                        </div>
                        <div className="diners">
                            <select
                            id="diners"
                            name="diners"
                            value={props.diners}
                            onChange={props.handleChange}
                            >
                                <option value="title">Number of diners*</option>
                                <option value="0-2">0-2</option>
                                <option value="2-4">2-4</option>
                                <option value="4-6">4-6</option>
                                <option value="more than 6">more than 6</option>
                            </select>
                            <br></br>
                        </div>
                        <div className="occasion">
                            <select
                            id="occasion"
                            name="occasion"
                            value={props.occasion}
                            onChange={props.handleChange}
                            >
                                <option value="title">Occasion*</option>
                                <option value="Dinner">Dinner</option>
                                <option value="Birthday">Birthday</option>
                                <option value="Anniversary">Anniversary</option>
                                <option value="Engagement">Engagement</option>
                                <option value="Coorporate dinner">Coorporate dinner</option>
                            </select>
                            <br/>
                        </div>
                        <div className="seating">
                            <h3>Seating options*</h3>
                            <div className="seatingradio">
                                <section className="seatin">
                                    <label htmlFor="standard">Standard</label>
                                    <input
                                    type="radio"
                                    id="standard"
                                    name="seating"
                                    value={props.standard}
                                    onChange={props.radioChange}
                                    /> <br/>
                                </section>
                                <section className="seatout">
                                    <label htmlFor="outside">Outside</label>
                                    <input
                                    type="radio"
                                    id="outside"
                                    name="seating"
                                    value={props.outside}
                                    onChange={props.radioChange}
                                    /> <br/>
                                </section>
                            </div>
                        </div>
                        <input type="submit" disabled={!props.formValidation()} className="reserveformButton" value="Make your reservation" />
                    </form>
                </div>
                <button className="useReducer" style={{backgroundColor:"red", width:"150px", marginLeft:"10px"}}
                    onClick={()=>props.dispatch({type:"booked", payload:{time:props.time}})}
                    >
                        click to check useReducer
                    </button>
            </div>
            <div className="footeWhite"><FooterWhite/></div>
        </div>
    )
}

export default BookingForm;