import { useContext, useState } from "react"

export const ThemeContext = useContext();

const ThemeContextProvider = ( props ) => {
    const  [ isDarkModeActive, updateThemeMode ] = useState(flase);

    return (
        <ThemeContext.Provider value={{isDarkModeActive, updateThemeMode}} >
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;