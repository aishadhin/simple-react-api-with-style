import React from 'react';
import './Item.css'

const Item = (props) => {
    return (
        <div className='items'>
            <h3>Country Name: {props.country.name.common}</h3>
            <h4>Area Code: {props.country.area}</h4>
            <img src={props.country.flags.png} alt="" />
        </div>
    );
};

export default Item;