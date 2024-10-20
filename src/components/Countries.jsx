import { useEffect } from "react";
import { useState } from "react";
import Country from "./country";
import './country.css'
const Countries = () => {
    const [Countries,setCountries] = useState([]);
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
            <div className="country">
                {
                    Countries.map(country => <Country key={Countries.cca3} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;