import React from 'react';
import './Product.css';

const Product = (props) => {
    const { name, time, img } = props.product;
    const { handleAddToList } = props;
    return (
        <div className='product'>
            <img src={img} alt='anything'></img>
            <div className='product-info'>
                <h4>Name: {name}</h4>
                <h4>Time : {time}</h4>
            </div>
            <button onClick={() => handleAddToList(props.product)} className='btn-cart'>
                <p>Add to list</p>
            </button>
        </div>
    );
};

export default Product;