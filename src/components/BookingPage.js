import '../App.css'
import {useReducer} from "react";
import {useTimesListContext } from './TimeContext';
import {useNavigate } from "react-router-dom";
import {useUserDetailsContext} from "./UserContext"
import BookingForm from './BookingForm'

    const reducer=(timeSlots,action)=>{
        switch (action.type){
          case "booked" :
            return timeSlots.filter((elem)=>elem !== action.payload.time)
          default:
            return timeSlots
        }
      }
function BookingPage(){
    const {values, handleChange,radioChange,setValues}=useUserDetailsContext();
console.log(values)
    const {timeList,bookConf} = useTimesListContext();
    const initialTime=timeList
    const [timeSlots,dispatch]= useReducer(reducer,initialTime)
    const navigate=useNavigate();

console.log("timeSlots")
console.log(timeSlots)

    const submitForm = () => {
        if (bookConf==="true"){
            navigate("/login")
    }}
    const handleSubmit=(e)=>{
       e.preventDefault();
       dispatch({type:"booked", payload:{time:values.time}});
       submitForm()
    }
    const formValidation=()=>{
        return(
        values.date !=="date" &&
        values.time !=="time" &&
        values.diners!=="Number of diners" &&
        values.occasion!== "Occasion"
        )}
//console.log(formValidation())
    return (
        <>
        <BookingForm
        date={values.date}
        time={values.time}
        diners={values.diners}
        ocassion={values.occasion}
        standard={values.standard}
        outside={values.outside}
        handleChange={handleChange}
        radioChange={radioChange}
        formValidation={formValidation}
        handleSubmit={handleSubmit}
        timeSlots={timeSlots}
        dispatch={dispatch}
        />
        </>
    )
}

export default BookingPage;