import { createContext, useState } from "react"

export const CountriesContext = createContext()

 const CountriesContextProvider = (props) => {
    const [countriesList, setCountriesList] = useState({})
    const [isLoaded, setIsLoaded ] = useState(false)
    const [error, setError ] = useState(false)

    const updateCountries = (newCountries) => {
        setCountriesList(newCountries)
    }

    const updateLoadingState = (newState) => {
        setIsLoaded(newState);
        console.log("loading  state updated")
    }

    const updateError = (newVal) => {
        setError(newVal)
    }

    return (
        <CountriesContext.Provider value={{countriesList, isLoaded, error, updateCountries, updateLoadingState, updateError}}>
            {props.children}
        </CountriesContext.Provider>
    )
}

export default CountriesContextProvider;