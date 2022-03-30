import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getStored } from '../../utilities/fakedb';
import OrderSummary from '../OrderSummary/OrderSummary';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products,setProduct] = useState([]);
    const [cart,setCart] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    //instant add Total price cart
    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        console.log(exists)
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart,selectedProduct]
        }
        else{
            console.log(cart)
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            console.log(rest)
            exists.quantity = exists.quantity + 1;
            newCart = [...rest,exists];
        }
        addToDb(selectedProduct.id) 
        setCart(newCart)
    }
    useEffect(() => {
        const stored = getStored()
        const product = []
        for(const id in stored){
            const addedProduct = products.find(product => product.id === id)
            if(addedProduct){
                const quantity = stored[id];
                addedProduct.quantity = quantity;
                product.push(addedProduct)
            }
        }
        setCart(product)
    },[products])
    // clearData
    const clearData = (cart) => { 
        const clearAll = deleteShoppingCart()
        if(!clearAll){
            cart = []
        }
        setCart(cart)
    } 
    return (
        // <div className='container'>
            <div className='product-container'>
                <div className='products'>
                    {
                        products.map(product => <Product
                             product={product}
                             key={product.id}
                             handleAddToCart={handleAddToCart}
                             ></Product>)
                    }
                </div>
                <div className='cart-container'>
                    <OrderSummary
                    cart={cart} 
                    clearData={clearData}
                    ></OrderSummary>
                </div>
            </div>
        // </div>
    );
};

export default Shop;