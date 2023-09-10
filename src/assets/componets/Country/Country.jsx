import { useState } from 'react';
import './Country.css';
const Country = ({country ,handelMark}) => {
    console.log(country)
    // console.log(handelMark)
    const {name ,flags ,population ,cca3, cca2} = country;

    const [visited , setVisited] = useState(false);
    const handelVisited = () => {
        setVisited(!visited)
    }


    const [markCountry , setMarkCountry] = useState([])
    
    return (
        <div className={`grid-item ${visited && 'visited'}`}>
            <img src= {flags?.png} alt="" />
            <h3>Name: {name.common}</h3>
            <p>{name.nativeName?.eng?.official}</p>
            <div>
                <p > Population: {population}</p>
                <p className='dis'>Code: {cca3 + ' ' + cca2}</p>
                <button onClick={() => handelMark(Country)}>Mark Country</button>
                <button onClick={handelVisited} className='rig'>{visited? 'Visited' : 'Going'}</button>
                {
                    visited ? 'I have visited this country'
                    : ' I want to visited'
                    
                }
            </div>
        </div>
    );
};

export default Country;