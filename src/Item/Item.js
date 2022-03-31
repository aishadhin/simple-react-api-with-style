import React from 'react';
import { added } from '../fakedb';
import './Item.css'


const Item = (props) => {
    const id = props.country.name.common;
    const add = id => {
        added(id)
    }
    return (
        <div className='items'>
            <h3>Country Name: {props.country.name.common}</h3>
            <h4>Area Code: {props.country.area}</h4>
            <img src={props.country.flags.png} alt="" />
            <button className='btn' onClick={()=>add(id)}>Add To Storage</button>
        </div>
    );
};

export default Item;