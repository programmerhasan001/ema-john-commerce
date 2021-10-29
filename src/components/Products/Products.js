import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faCoffee } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Products.css'
import Rating from 'react-rating';
import Features from '../../Features/Features';


const Products = (props) => {
    const { img, name, seller, price, stock, star, features } = props.product;
    const shoppingCartBtn = <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
    return (
        <div className="product-container">
            <div className="product-img">
                <img src={img} alt="products" />
            </div>
            <div className="product-details">
                <h3 className="product-heading">{name}</h3>
                <span>by: {seller}</span>
                <div className="product-info">
                    <div className="price-add-toCart">
                        <p>${price}</p>
                        <p>only {stock} left in stock - order soon</p>
                        <button className="addToCartBtn" onClick={() => props.handleAddToCart(props.product)}>
                            {shoppingCartBtn} add to cart</button>
                    </div>
                    <div className="features">
                        <span><strong>Ratting: </strong></span>
                        <Rating
                            initialRating={star}
                            readonly
                            emptySymbol="far fa-star ratting-icon-color"
                            fullSymbol="fas fa-star ratting-icon-color"
                        />
                        <span style={{ display: 'block' }}>
                            <strong>Features :</strong>
                        </span>
                        {
                            features.map(feature => <Features
                                productFeatures={feature}
                            ></Features>)
                        }
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Products;