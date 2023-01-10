import Countries from "../Component/Countries/Countries"
import CountriesContextProvider from "../Context/CountriesContext";
import Filters from "../Component/Filters/Filters"

const CountriesPage = () => {
    return (
        <CountriesContextProvider>
            <Filters />
            <Countries />
        </CountriesContextProvider>
    )
}

export default CountriesPage;