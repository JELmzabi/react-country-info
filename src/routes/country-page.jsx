import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CountryDetails from "../Component/countryDetails/CountryDetails"
import Loading from "../Component/Loading/Loading";
import BackButton from "../Elements/BackButton/BackButton";
    
const CountryPage = () => {
    const [ isLoaded, setIsLoaded ] = useState(false);
    const [ countryInfo, setCountryInfo ] = useState({});
    const { countryName } = useParams()
    console.log(countryName)

    async function fetchCountry(countryName){
        const COUNTRY_INFO_URL = `https://restcountries.com/v2/name/${countryName}?fields=name,flags,capital,population,region,subregion,languages,langua
        ges,borders,topLevelDomain,nativeName,currencies`
        
        try{
            const response = await fetch(COUNTRY_INFO_URL);
            let result = await response.json();
            result = result[0]
            
            if(result.borders){
                var COUNTRY_NAMES_URL = `https://restcountries.com/v2/alpha?codes=${result.borders.join(",")}&fields=name`; 
                var borderNamesResponse = await fetch(COUNTRY_NAMES_URL)
                var borderNamesResult = await borderNamesResponse.json()
            }else{
                var borderNamesResult = []
            }
           
            result = {...result, borders: borderNamesResult.map( border => border.name )}

            setCountryInfo(result)
            setIsLoaded(true)
        }catch{
            console.log("Not country was found");
        }
    }

    useEffect(() => {
        fetchCountry(countryName)
    }, [countryName])
    
    return (
            isLoaded ? 
                <>
                    <BackButton />
                    <CountryDetails countryInfo={countryInfo}/> 
                </>
                    : <Loading />
    )
}

export default CountryPage;