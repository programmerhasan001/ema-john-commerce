import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cartProducts, setCartProducts] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);
    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data);
            })
    }, [])

    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                const addedProducts = products.find(product => product.key === key);
                if (addedProducts) {
                    const quantity = savedCart[key];
                    addedProducts['quantity'] = quantity;
                    storedCart.push(addedProducts);
                }
                setCartProducts(storedCart);
            }
        }
    }, [products])

    // handle add to cart btn
    const handleAddToCart = product => {
        const products = [...cartProducts, product];
        setCartProducts(products);
        addToDb(product.key);
    }
    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchedProducts);
    }
    return (
        <div>
            <div className="search-field">
                <input
                    onChange={handleSearch}
                    type="text"
                    name="search-field"
                    id="search"
                    placeholder="search what you want" />
            </div>
            <div className="shop-container">
                <div className="products">
                    {
                        displayProducts.map(product => <Products
                            key={product.key}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Products>)
                    }
                </div>
                <div>
                    <Cart cartProducts={cartProducts}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;