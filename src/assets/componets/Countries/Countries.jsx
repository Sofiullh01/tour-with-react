import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries , setCountries] = useState([]);
    // 

    useEffect (()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])

    const handelMark = country => {
        console.log('add this to your visited country')
        console.log(country)
    }
    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <div className="box flex">
            {
                countries.map(country => <Country country={country} 
                    handelMark={handelMark}
                    key={country.cca3}></Country>)
            }
        </div>
        </div>
        
    );
};

export default Countries;