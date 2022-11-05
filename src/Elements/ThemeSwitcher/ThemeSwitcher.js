import react, { Component, useEffect, useState } from "react"
import "./ThemeSwitcher.css"

const ThemeSwitcher = ( props ) => {
    const [ isDarkModeActive, setIsDarkModeActive ] = useState(false);

    const switchTheme = () => {
        setIsDarkModeActive( prevMode => !prevMode )
    }

    useEffect( ()=> {
        const isDark = JSON.parse(localStorage.getItem("isDark")) ?? false;
        setIsDarkModeActive(isDark)
        props.changeTheme(isDark)
    }, [] )
    
    useEffect(()=> {
        localStorage.setItem("isDark", isDarkModeActive)
        props.changeTheme(isDarkModeActive)
    }, [isDarkModeActive])
    
    return (
        <button className="theme-switcher-button" onClick={switchTheme}>{isDarkModeActive ? "☀️" : "🌙"}</button>
    )
}

export default ThemeSwitcher;