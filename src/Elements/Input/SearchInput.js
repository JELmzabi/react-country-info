import react, {useContext, useEffect, useState} from "react";
import { CountriesContext } from "../../Context/CountriesContext"
import searchIcon from "../../assets/search-outline.svg"
import "./SearchInput.css"

const SearchInput = ( props ) => {
    const [ query, setQuery ] = useState("");
    const {updateCountries, updateLoadingState, updateError} = useContext(CountriesContext);

    async function fetchCountry(query){
        updateLoadingState(false); // has not loaded yet 
        updateError(false)
        
        let URL = "";
    
        if(query == ""){
            URL = "https://restcountries.com/v2/all?fields=name,flags,capital,population,region"
        }else{
            URL = `https://restcountries.com/v2/name/${query}?fields=name,flags,capital,population,region`
        }
        
        const response = await fetch(URL);

        if(response.status != 200){
            throw Error("Not found")
        }
        
        const result = await response.json();
            
        return result;
        
    }

    // TODO: Add Catch to fetchCountry
    useEffect(() => {
        fetchCountry(query)
           .then( res => {
                updateCountries(res) // update countriesList state in app
           })
           .catch(
            err => updateError(true)
           )
           .finally(
            () => updateLoadingState(true) // loading has been completed
           )
    }, [query])

    return (
        <div className="input__wrapper">
            <img className="input-icon" src={searchIcon} alt='search icon'/>
            <input value={query} placeholder="Search for a country..." onChange={(e) => setQuery(e.target.value)}/>
        </div>
    )
    
}

export default SearchInput;
