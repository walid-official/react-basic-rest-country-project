import { useState } from 'react';
import './country.css'
const Country = ({country,handleVisitedCountries}) => {
    const [isVisited,setVisited] = useState(false)

    const handleVisited = () => {
        setVisited(!isVisited);
    }
    const handleCountryInfo = () => {
        handleVisitedCountries(country)
    }
    return (
        <div className="">
            
            <div className={`border-country ${isVisited ? 'bg-color' : 'non-visited'}`}>
                <img className='' src={country.flags.png} alt="" />
                <h2>Name: {country.name.common}</h2>
                <button onClick={handleCountryInfo}>Mark Visited Country</button>
                <button onClick={handleVisited}>{isVisited ? 'Visited' : "Going"}</button>
                {isVisited ? "I have visited this country" : "I have not visited this country"}
            </div>
        </div>
       
    );
};

export default Country;