import React from 'react';

const Product = (props) => {
    const { name, time, } = props.product;
    return (
        <div>
            <h2>Name: {name}</h2>
            <h2>Time : {time}</h2>
        </div>
    );
};

export default Product;