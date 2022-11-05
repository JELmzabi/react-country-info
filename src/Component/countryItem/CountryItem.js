import React from "react";
import "./CountryItem.css";

const CountryItem = ({ flag, name, population, region, capital }) => {
  return (
    <a href={`/${name}`}>
      <article className="countryItem">
        <figure>
          <img src={flag} className="countryItem-flag" />
        </figure>
        <div className="countryItem-info">
          <h3>{name}</h3>
          <ul>
            <li>
              <strong>population</strong>: {population}
            </li>
            <li>
              <strong>region</strong>: {region}
            </li>
            <li>
              <strong>capital</strong>: {capital}
            </li>
          </ul>
        </div>
      </article>
    </a>
  );
};

export default CountryItem;
