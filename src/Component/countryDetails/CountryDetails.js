import React from "react";
import { Link } from "react-router-dom";
import BackButton from "../../Elements/BackButton/BackButton";
import "./CountryDetails.css";

const CountryDetails = ({ countryInfo }) => {
  const {
    flags,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = countryInfo;
  return (
      <div className="country_details ">
        <div className="country_details-flag">
          <img src={flags.svg} />
        </div>
        <div className="country_details-info">
          <h2 className="country_details-name">{name}</h2>
          <div className="country_details-details">
            <ul>
              <li>
                <strong>native name:</strong> {nativeName}
              </li>
              <li>
                <strong>population:</strong> {population}
              </li>
              <li>
                <strong>region:</strong> {region}
              </li>
              <li>
                <strong>sub region:</strong> {subregion}
              </li>
              <li>
                <strong>capital: </strong> {capital}
              </li>
            </ul>
            <ul>
              <li>
                <strong>top level domain:</strong> {topLevelDomain}
              </li>
              <li>
                <strong>currencies: </strong>
                {currencies.map((currencie) => currencie.name).join(", ")}
              </li>
              <li>
                <strong>languages: </strong>
                {[
                  ...languages.map((language) => language.name),
                ].toLocaleString()}
              </li>
            </ul>
          </div>

          <div className="country_details-borders">
            <strong>border countries:</strong>

            {borders.map((border, id) => (
              <Link to={`/country/${border.toLowerCase()}`} key={id}>
                <span>{border}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
  );
};
export default CountryDetails;
