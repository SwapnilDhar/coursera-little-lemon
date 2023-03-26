import { createContext, useContext,useState } from "react";

    const UserContext= createContext(undefined);

    const UserProvider=({children})=>{
        const [values,setValues]=useState({
            date:"Date",
            time:"Time",
            diners:"Number of diners",
            occasion: "Occasion",
            standard:false,
            outside:false,
        })
        const handleChange=(e)=>{
            setValues({...values, [e.target.name]: e.target.value})
        }
        const radioChange=(e)=>{
            setValues({...values, [e.target.id]: true})
        }
    return (
            <UserContext.Provider value={{values,setValues, handleChange,radioChange}}>
                {children}
            </UserContext.Provider>
        )
}

export const useUserDetailsContext=()=>useContext(UserContext);

export default UserProvider;