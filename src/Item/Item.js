import React from 'react';
import { added, removeFromDb } from '../fakedb';
import './Item.css'


const Item = (props) => {
    const id = props.country.name.common;
    const add = id => {
        added(id)
    }

    const removeItem = id => {
        removeFromDb(id)
    }

    return (
        <div className='items'>
            <h3>Country Name: {props.country.name.common}</h3>
            <h4>Area Code: {props.country.area}</h4>
            <img src={props.country.flags.png} alt="" />
            <button onClick={()=>add(id)}>Add To Storage</button>
            <button onClick={()=>removeItem(id)}>Remove Item</button>
        </div>
    );
};

export default Item;