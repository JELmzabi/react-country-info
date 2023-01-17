import { useEffect, useState, useContext } from "react";
import { CountriesContext } from "../../Context/CountriesContext";
import "./Dropdown.css"

const Dropdown = ( ) => {
    const [ toggle, setToggle ] = useState(false)
    const {countryRegion, setCountryRegion} = useContext(CountriesContext);

    const selectRegion = (e)=>{
        const region = e.target.dataset.value;
        setCountryRegion(region)
        setToggle( prev => !prev )
    }

    return (
        <div className="select__wrapper">
            <div className="select" onClick={() => setToggle( prev => !prev )}>{ countryRegion }</div>
            {
                toggle && (
                    <ul className="options">
                        <li data-value="all" onClick={selectRegion}>all</li>
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