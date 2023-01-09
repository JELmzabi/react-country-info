import { Component } from 'react';
import './App.css';
import CountryDeails from './Component/countryDetails/CountryDetails';
import Header from './Component/Header/Header';
import Filters from './Component/Filters/Filters';
import Countries from './Component/Countries/Countries';
import Loading from './Component/Loading/Loading';
import Error from "./Component/Error/Error"
import CountriesContextProvider  from './Context/CountriesContext';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            isDarkModeActive: false,
            error: false
        };
        this.pathName = window.location.pathname;
        
    }

    async fetchCountry(countryName){

        const COUNTRY_INFO_URL = `https://restcountries.com/v2/name/${countryName}?fields=name,flags,capital,population,region,subregion,languages,borders,topLevelDomain,nativeName,currencies`
        
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

            this.setState({countriesList: result})
            this.setState({isLoaded: true})
            
        }catch{
            console.log("Not country was found");
            this.setState({countriesList: {}})
            this.setState({isLoaded: true})
        }
    }

    updateTheme = (newVal) =>{
        console.log("update theme has been invoked", newVal)
        this.setState({isDarkModeActive: newVal})
    }

    componentDidMount(){
        let countryName = this.pathName.substring(1);
        if (countryName) {
            this.fetchCountry(countryName)
        }
    }


    renderContent = () => {
        
            return (
                    <CountriesContextProvider>
                        <Filters />
                        <Countries />
                    </CountriesContextProvider>
            )
    }

    render(){
        if(this.pathName == "/"){
            return (
                <div className={`App ${this.state.isDarkModeActive ? "dark" : "light"}`}>
                    <Header changeTheme={this.updateTheme} />
                    {this.renderContent()}
                </div>
            );
        }else{
            return (
                <div className={`App ${this.state.isDarkModeActive ? "dark" : "light"}`}>
                    <Header changeTheme={this.updateTheme}/>
                    {this.state.isLoaded ? <CountryDeails countryInfo={this.state.countriesList} /> : <Loading /> }
                </div>
            );
        }
    }
  
}

const App = () => {
    
    return (
        <Header changeTheme={this.updateTheme}/>
    )
}

export default App;
