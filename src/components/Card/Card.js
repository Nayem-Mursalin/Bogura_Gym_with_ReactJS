import React, { useEffect, useState } from 'react';
import logo from '../../images/logo.svg'
import Product from '../Product/Product';
import './Card.css';

const Card = () => {
    const [products, setProdutcs] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProdutcs(data))
    }, [])

    return (
        <div className='main-container'>
            <div className='left-container'>
                <div className='gym-name'>
                    <img src={logo} alt='ABC' className='logo'></img>
                    <h1>Bogura GYM</h1>
                </div>
                <div className='product-container'>
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}

                        ></Product>)
                    }
                </div>


            </div>
            <div className='cart-container'>
                <h2>Right part</h2>
            </div>

        </div>
    );
};

export default Card;