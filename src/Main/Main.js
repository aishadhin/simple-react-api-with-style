import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import'./Main.css'

const Main = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h2>Total Countries: {countries.length}</h2>

            <div className='grid'>
                {
                    countries.map(country => <Item country={country}></Item>)
                }
            </div>


        </div>
    );
};

export default Main;