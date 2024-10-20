import './country.css'
const Country = ({country}) => {
    console.log(country);
    return (
        <div className=''>
            <img className='' src={country.flags.png} alt="" />
            <h2>Name: {country.name.common}</h2>
        </div>
    );
};

export default Country;