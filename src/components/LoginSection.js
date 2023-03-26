import React from "react";
import '../App.css'
import FooterWhite from './FooterWhite.js'
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoginSection(){
    const navigate=useNavigate()

    const [user,setUser]=useState(
        {firstname:"",
        lastname:"",
        phone:"",
        email:"",
        password:"",
        comments:"",
        })
//console.log(user,setUser);
    const [userErrors,setUseErrors]=useState({});
    const [isSubmit,setIsSubmit]=useState(false)

    const handleSubmitLogin=(e)=>{
        e.preventDefault();
        navigate("/pay")
     }

    const handleChangeSignUp=(e)=>{
        setUser({...user, [e.target.name]: e.target.value})
     };
     const handleSubmitSignUp=(e)=>{
        e.preventDefault();
        setUseErrors(validate(user));
        setIsSubmit(true);
     }
     const validate = (values) => {
        const errors = {};
        if (!values.firstname) {
          errors.firstname = 'First name is required!';
        }
        if (!values.lastname) {
          errors.lastname = 'Last name is required!';
        }
        if (!values.phone) {
            errors.phone = 'Phone number is required!';
          } else if (!/^[+][0-9]{10,16}|[0-9]{10,16}|[+][0-9]{2}[(][0-9]{1}[)][0-9]{10,16}$/i.test(user.phone)) {
            errors.phone = 'Invalid phone!';
          }
        if (!values.email) {
          errors.email = 'Email is required!';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(user.email)) {
          errors.email = 'Invalid email address!';
        }
        if (!values.password) {
            errors.password = 'Password is required!';
          } else if (!/^[a-zA-Z0-9!@#$%^&*]{6,20}$/i.test(user.password)) {
            errors.password = '6 - characters is all you need!';
          }
        return errors;
      };
      useEffect(()=>{
        //console.log(userErrors)
        if(Object.keys(userErrors).length===0 && isSubmit){
        navigate("/pay")
        }
     },[userErrors])

    return (
        <div className="loginpage">
            <div className="loginforms">
                    <section className="logintitle">
                        <h1>Little Lemon</h1>
                        <p>Chicago</p>
                    </section>
            <div className="forms">
                <div className="login">
                    <form onSubmit={handleSubmitLogin}>
                        <h2>If you have already an account,
                        please log in.</h2>
                        <div className="logincouples">
                            <div className="loginfields">
                                <input
                                type="email"
                                id="loginemail"
                                name="loginemail"
                                placeholder="useraddress@email.com"
                                /><br/>
                                <label htmlFor="loginemail">Please enter your email</label><br/>
                                </div>
                            <div className="loginfields">
                                <input
                                type="password"
                                id="loginpassword"
                                name="loginpassword"
                                placeholder="Password"
                                /><br/>
                                <label htmlFor="loginpassword">Please enter your passsword</label><br/>
                            </div>
                        </div>
                        <div><button type="submit" className="loginbutton">Continue</button></div>
                       </form>
                    </div>
                    <div className="signup">
                        <form onSubmit={handleSubmitSignUp}> 
                            <div className="signupdetails">
                                <div className="signupinfo">
                                    <h2>If this is your first time you are using our website,
                                    please fill the form below.</h2>
                                    <div className="signupcouples">
                                        <div className="signupfield">
                                            <label htmlFor="firstname">*First name</label><br/>
                                                <input
                                                type="text"
                                                id="firstname"
                                                name="firstname"
                                                placeholder="First Name"
                                                value={user.firstname}
                                                onChange={handleChangeSignUp}
                                                /><br/>
                                                <span>{userErrors.firstname}</span><br/>                                                </div>
                                            <div className="signupfield">
                                                <label htmlFor="lastname">*Last name</label><br/>
                                                <input
                                                type="text"
                                                id="lastname"
                                                name="lastname"
                                                placeholder="Last Name"
                                                value={user.lastname}
                                                onChange={handleChangeSignUp}
                                                /><br/>
                                                <span>{userErrors.lastname}</span><br/>
                                            </div>
                                        </div>
                                        <div className="signupcouples">
                                            <div className="signupfield">
                                                <label htmlFor="phone">*Phone number</label><br/>
                                                <input type="tel"
                                                id="phone"
                                                name="phone"
                                                placeholder="123456789"
                                                // pattern="
                                                // [+][0-9]{10,16}|[0-9]{10,16}|[+][0-9]{2}[(][0-9]{1}[)][0-9]{10,16}"
                                                value={user.phone}
                                                onChange={handleChangeSignUp}
                                                />
                                                <br/>
                                                <span>{userErrors.phone}</span><br/>
                                            </div>
                                            <div className="signupfield">
                                                <label htmlFor="email">*Email</label><br/>
                                                <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                placeholder="useraddress@email.com"
                                                value={user.email}
                                                onChange={handleChangeSignUp}
                                                /><br/>
                                                <span>{userErrors.email}</span><br/>
                                            </div>
                                        </div>
                                    <label htmlFor="password">*Password</label><br/>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="*Password"
                                        // minLength={6}
                                            // pattern="[a-zA-Z0-9!@#$%^&*]{6,20}"
                                        value={user.password}
                                        onChange={handleChangeSignUp}
                                        /><br/>
                                        <span>{userErrors.password}</span><br/>
                                    <textarea
                                        name="comments"
                                        rows="4"
                                        cols="40"
                                        maxLength={250}
                                        placeholder="*Add a special request(optional)"
                                        value={user.comments}
                                        onChange={handleChangeSignUp}
                                        >
                                    </textarea>
                                </div>
                            </div>
                            <div><button type="submit" className="signupbutton">Continue</button></div>
                        </form>
                    </div>
                </div>

            </div>
            <div className="footeWhite"><FooterWhite/></div>
        </div>
)}

export default LoginSection;

{/* <pre>{JSON.stringify(user,undefined,2)}</pre> */}
/*disabled submit button*/
/* min max/number etc preriquisite*/
/*to connect the labl with the input id=htmlFor*/
/*handleChange 22:The reason why this works with the brackets notation is that it allows me to set the value of the E target
named dynamically. In other words, it allows me to set it as goal, If the user typed into the input with the name
attributes set to Goal or to set it as By, If the user typed into the input with the name attributes set to By.
Second, I declare a submit handler function which also accepts the event attribute. */




// const validate = (user) => {
//     const errors = {};
//     if (!user.firstname) {
//       errors = 'Required';
//     }
//     if (!user.lastname) {
//       errors.lastname = 'Required';
//     }
//     if (!user.phone) {
//         errors.phone = 'Required';
//       } else if (!/^[0-16.+]/i.test(user.phone)) {
//         errors.phone = 'Invalid phone';
//       }
//     if (!user.email) {
//       errors.email = 'Required';
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(user.email)) {
//       errors.email = 'Invalid email address';
//     }
//     if (!user.password) {
//         errors.password = 'Required';
//       } else if (!/^(?=.*[0-9])(?=.*[a-zA-z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/i.test(user.password)) {
//         errors.password = 'Invalid phone';
//       }
//     return errors;
//   };
// console.log(validate())