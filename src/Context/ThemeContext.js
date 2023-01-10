import { createContext, useState } from "react"

export const ThemeContext = createContext();

const ThemeContextProvider = ( props ) => {
    const  [ isDarkModeActive, updateThemeMode ] = useState(false);

    return (
        <ThemeContext.Provider value={{isDarkModeActive, updateThemeMode}} >
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;