import { createContext, useEffect, useRef, useState } from "react"

export const CountriesContext = createContext()

 const CountriesContextProvider = (props) => {
    const [allCountries, setAllCountries] = useState([])
    const [countriesList, setCountriesList] = useState([])
    const [isLoaded, setIsLoaded ] = useState(false)
    const [error, setError ] = useState(false)
    const [countryRegion, setCountryRegion] = useState("filter by region");
    const [countryName, setCountryName] = useState("");
    const isMounted = useRef(false); 

    const fetchCountries = async () => {
        updateLoadingState(false) // hasnot lodoaded yet
        updateError(false)

        URL = `https://restcountries.com/v2/all?fields=name,flags,capital,population,region`;
        
        const response = await fetch(URL);

        if(response.status != 200){
            throw Error("Not found")
        }
        
        const result = await response.json();

        return result;
    }

    useEffect( () => {
        let data = fetchCountries();

        data.then(res => {
            setCountriesList(res);
            setAllCountries(res);
        })
        .catch( err => setError(true) )
        .finally( () => setIsLoaded(true) );

    }, [] )


    useEffect( () => {
        if(isMounted.current){
            let filteredCountries = allCountries;
            if(countryName !== ""){
                filteredCountries = filteredCountries.filter(country => {
                    if( country.name.toLowerCase().startsWith(countryName) ){
                        return country;
                    }
                })
            }
            
            if(countryRegion != "all" && countryRegion != "filter by region"){
                filteredCountries = filteredCountries.filter(country => {
                    if( country.region.toLowerCase() == countryRegion.toLowerCase() ){
                        return country;
                    }
                })
            }

            console.log(filteredCountries)
            if (filteredCountries ==false) {
                setError(true)
            }else{
                setError(false)
            }
            
            setCountriesList(filteredCountries)
        }

        isMounted.current = true
    }, [countryName, countryRegion])


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
        <CountriesContext.Provider value={{countriesList, isLoaded, error, countryRegion, countryName, setCountryRegion, setCountryName}}>
            
            {props.children}
        </CountriesContext.Provider>
    )
}

export default CountriesContextProvider;