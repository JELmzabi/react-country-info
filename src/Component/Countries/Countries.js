import React, { useContext } from "react";
import { CountriesContext } from "../../Context/CountriesContext";
import CountryItem from "../countryItem/CountryItem";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import "./Countries.css";

const Countries = () => {
  const { countriesList, isLoaded, error } = useContext(CountriesContext)

  const RenderCountries = () => {
    return countriesList.map((country, id) => {
      const { flags, name, capital, population, region } = country;
      return (
        <CountryItem
          key={id}
          flag={flags.png}
          name={name}
          population={population}
          capital={capital}
          region={region}
        />
      );
    })
  }
  return (
    <>
      { error ? <Error message="Country not found" /> :
            isLoaded ? 
                <div className="countries container">{RenderCountries()}</div> 
            : <Loading /> }
    </>
  );
};
export default Countries;
