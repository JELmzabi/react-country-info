
export const fetchCountriesByName= async (query) => {

    const URL = `https://restcountries.com/v2/name/${query}?fields=name,flags,capital,population,region`
    
    const response = await fetch(URL);

    if(response.status != 200){
        throw Error("Not found")
    }
    
    const result = await response.json();
        
    return result;
    
}


export const fetchCountries = async () => {
    URL = "https://restcountries.com/v2/all?fields=name,flags,capital,population,region";

    const response = await fetch(URL);

    if(response.status != 200){
        throw Error("Not found")
    }
    
    const result = await response.json();
        
    return result;
}

export const fetchCountryDetails = async (countryName) => {

    const COUNTRY_INFO_URL = `https://restcountries.com/v2/name/${countryName}?fields=name,flags,capital,population,region,subregion,languages,borders,topLevelDomain,nativeName,currencies`
    
        const response = await fetch(COUNTRY_INFO_URL);
        if(response.status != 200){
            throw Error("Country not found")
        }

        let result = await response.json();
        result = result[0]

        
        if(result.borders){
            var COUNTRY_NAMES_URL = `https://restcountries.com/v2/alpha?codes=${result.borders.join(",")}&fields=name`; 
            var borderNamesResponse = await fetch(COUNTRY_NAMES_URL)

            if(borderNamesResponse.status !== 200){
                throw Error("fetch borders Error")
            }
            
            var borderNamesResult = await borderNamesResponse.json()
        }else{
            var borderNamesResult = []
        }
        
        result = {...result, borders: borderNamesResult.map( border => border.name )}

        return result
}