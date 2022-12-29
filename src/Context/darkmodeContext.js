import { dark } from "@mui/material/styles/createPalette";
import { useEffect } from "react";
import { useState } from "react";

const { createContext } = require("react");

export const DarkModeContext = createContext()

export const DarkModeContextProvider = ({children}) => {
    const[darkMode,setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false)

    const toggle = () => {
        setDarkMode(!darkMode)
    }

    useEffect(()=>{
        localStorage.setItem("darkMode",darkMode)
    },[darkMode])


    return(
        <DarkModeContext.Provider value={{darkMode,toggle}}>
            {children}
        </DarkModeContext.Provider>
    )
}