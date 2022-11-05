import { useEffect, useState, useContext } from "react";
import { CountriesContext } from "../../Context/CountriesContext";
import "./Dropdown.css"

const Dropdown = ( ) => {
    const [ region, setRegion ] = useState("filter by region")
    const [ toggle, setToggle ] = useState(false)
    const {updateCountries, updateLoadingState, updateError} = useContext(CountriesContext);

    const fetchCountriesByRegion = async (region) => {
        updateLoadingState(false) // hasnot lodoaded yet
        updateError(false)

        const URL = `https://restcountries.com/v2/region/${region}?fields=name,flags,capital,population,region`
       
        const response = await fetch(URL);

        if(response.status != 200){
            throw Error("Not found")
        }
        
        const result = await response.json();
            
        return result;
    }

    useEffect(()=>{
        if(region != "filter by region"){
            fetchCountriesByRegion(region)
                .then( res => {
                    updateCountries(res) // update countriesList state in app
                })
                .catch(
                    err => updateError(true)
                )
                .finally(
                    () => updateLoadingState(true) // loading has been completed
                )
        }
    }, [region])

    const selectRegion = (e)=>{
        const region = e.target.dataset.value;
        setRegion(region)
        setToggle( prev => !prev )
    }

    return (
        <div className="select__wrapper">
            <div className="select" onClick={() => setToggle( prev => !prev )}>{ region }</div>
            {
                toggle && (
                    <ul className="options">
                        <li data-value="africa" onClick={selectRegion}>africa</li>
                        <li data-value="americas" onClick={selectRegion}>America</li>
                        <li data-value="asia" onClick={selectRegion}>Asia</li>
                        <li data-value="oceania" onClick={selectRegion}>Oceania</li>
                    </ul> 
                )
            }
            
        </div>
    )
}

export default Dropdown;