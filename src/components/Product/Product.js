import React from 'react';
import './Product.css';

const Product = (props) => {
    const { name, time, img } = props.product;
    return (
        <div className='product'>
            <img src={img} alt='anything'></img>
            <h4>Name: {name}</h4>
            <h4>Time : {time}</h4>
        </div>
    );
};

export default Product;