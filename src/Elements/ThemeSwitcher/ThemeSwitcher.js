import { useContext, useEffect } from "react"
import { ThemeContext } from "../../Context/ThemeContext"
import "./ThemeSwitcher.css"

const ThemeSwitcher = ( props ) => {
    const { isDarkModeActive, updateThemeMode } = useContext(ThemeContext)

    const switchTheme = () => {
        updateThemeMode( prevMode => !prevMode )
    }

    useEffect( ()=> {
        const isDark = JSON.parse(localStorage.getItem("isDark")) ?? false;
        updateThemeMode(isDark)
    }, [] )
    
    useEffect(()=> {
        localStorage.setItem("isDark", isDarkModeActive)
    }, [isDarkModeActive])
    
    return (
        <button className="theme-switcher-button" onClick={switchTheme}>{isDarkModeActive ? "☀️" : "🌙"}</button>
    )
}

export default ThemeSwitcher;