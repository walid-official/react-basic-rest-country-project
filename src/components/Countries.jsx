import { useEffect } from "react";
import { useState } from "react";
import Country from "./country";
import './country.css'


const Countries = () => {
    const [Countries,setCountries] = useState([]);
    const [visitedCountries,setVisitedCountry] = useState([]);

    const handleVisitedCountries = (countryInfo) => {
        const newVisitedCountries = [...visitedCountries, countryInfo];
        setVisitedCountry(newVisitedCountries);
    }

    useEffect(() => {
        const fetchCountries = async () => {
          const response = await  fetch('https://restcountries.com/v3.1/all')
          const data = await response.json()
          setCountries(data);
        }
        fetchCountries();
    },[])
    return (
        <div>
            <h2>Content Here</h2>
            <div className="">
                {
                   
                        visitedCountries.map(country => <li key={Countries.cca3} href="">{country.name.common}</li>)
                
                }
            </div>
            <div className="">
                <div className="country">
                    {
                        Countries.map(country => <Country
                            key={Countries.cca3}
                        handleVisitedCountries={handleVisitedCountries}
                         country={country}></Country>)       
                    }
                </div>
                

            </div>
        </div>
    );
};

export default Countries;