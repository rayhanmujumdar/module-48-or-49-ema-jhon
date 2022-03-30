import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css'
const Product = ({handleAddToCart,product}) => {
    // const {handleAddToCart,product} = props;
    const{name,img,price,ratings,seller} = product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>;
    return (
        <div data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="500" 
        className='product d-flex flex-column'>
            <div className='product-details'>
                <img src={img} alt="" className='img-fluid'/>
                <h3 className='mt-2'>{name}</h3>
                <p>Price: ${price} </p>
                <div className='m-0'>
                    <p className='m-0'>Manufacturer: {seller}</p>
                    <p>Rating: {ratings}</p>
                </div>
            </div>
            <div>
                <button onClick={() => handleAddToCart(product)} className='cart-btn fw-bold'>Add to Cart <span className='ms-2 fs-5'>{cartIcon}</span></button>
            </div>
        </div>
        //
    );
};
{/* <span className='ms-2 fs-5'><i className="fa-solid fa-cart-plus"></i></span> */}

export default Product;