import React, { useEffect, useState } from 'react';
import logo from '../../images/logo.svg'
import Product from '../Product/Product';
import './Card.css';

const Card = () => {
    const [products, setProdutcs] = useState([]);
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProdutcs(data))
    }, [])

    const handleAddToList = (product) => {
        console.log(product);
        const newList = [...list, product];
        setList(newList);

    }

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
                            handleAddToList={handleAddToList}
                        ></Product>)
                    }
                </div>


            </div>
            <div className='cart-container'>
                <h2>Right part</h2>
                <h4> Lenght : {list.length}</h4>
            </div>

        </div>
    );
};

export default Card;