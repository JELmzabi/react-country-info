import react, {useContext, useEffect, useState} from "react";
import { CountriesContext } from "../../Context/CountriesContext"
import searchIcon from "../../assets/search-outline.svg"
import "./SearchInput.css"

const SearchInput = ( ) => {
    const {countryName, setCountryName} = useContext(CountriesContext);


    return (
        <div className="input__wrapper">
            <img className="input-icon" src={searchIcon} alt='search icon'/>
            <input value={countryName} placeholder="Search for a country..." onChange={(e) => setCountryName(e.target.value)}/>
        </div>
    )
    
}

export default SearchInput;
