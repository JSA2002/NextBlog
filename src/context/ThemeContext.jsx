"use client"
import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

const getFromLocalStorage = () => {
    if(typeof window !== 'undefined'){
        const value = localStorage.getItem("theme");
        return value || "light";
    }
    return "light";
}

export const ThemeContextProvider = ({children}) => {

    useEffect(() => {
        if (typeof window !== undefined) {
          localStorage.setItem("theme", "light");
        }
    }, []);

    const [theme, setTheme] = useState(()=>{
        return getFromLocalStorage();
    })

    const toggle = () =>{
        setTheme(theme === "light" ? "dark" : "light");
    }

    useEffect(() => {
        if (typeof window !== undefined) {
          localStorage.setItem("theme", theme);
        }
    }, [theme]);

    return <ThemeContext.Provider value={{theme, toggle}}>{children}</ThemeContext.Provider>;
}