import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { faTrash,faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './OrderSummary.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
const OrderSummary = (props) => {
    console.log(props)
    const {cart} = props;
    const {clearData} = props;
    // const {clearData} = props
    //1st step
    // let total = 0;
    // for(const product of cart){
    //     total = total + product.price
    // }

    //2nd step
    const [totalPrice,setPrice] = useState(0);
    const [shippingTotal,setShipping] = useState(0);
    const [tax,setTax] = useState(0);
    const [grandTotal,setGrand] = useState(0);
    const [quantity,setQuantity] = useState(0);
    useEffect(()=>{
        const cartPrice = (previous,current) => previous + current.price * current.quantity;
        const total = cart.reduce(cartPrice,0);
        setPrice(total)
    },[cart])
    useEffect(() => {
        const shipping = (previous,current) => previous + current.shipping * current.quantity;
        const shippingTotal = cart.reduce(shipping,0)
        setShipping(shippingTotal)
    },[cart])
    useEffect(() => {
        const tax = totalPrice * 0.1;
        const totalTax = parseFloat(tax.toFixed(2))
        setTax(totalTax)
    },[totalPrice]);
    useEffect(() => {
        const grandTotal = totalPrice + shippingTotal + tax;
        setGrand(grandTotal);
    },[totalPrice,shippingTotal,tax])
    useEffect(() => {
        const quantity = (previous,current) => previous + current.quantity
        const totalQuantity = cart.reduce(quantity,0)
        setQuantity(totalQuantity)
    },[cart,quantity])
    // clear data
    return (
        <div className='Order-details'>
            <h4 className='text-center mb-3'>Order Summary</h4>
            <p>Selected items: {quantity}</p>
            <p>Total Price: {totalPrice}</p>
            <p>Total Shipping Carge: ${shippingTotal}</p>
            <p>Tax: ${tax}</p>
            <p className='fs-4'>Grand Total: ${grandTotal}</p>
            <div className='d-flex flex-column'>
                <button onClick={() => clearData(cart)}  className='btn btn-danger px-4 py-2 my-2'>Clear Cart <FontAwesomeIcon icon={faTrash} className={'ps-2'}/></button>
                <button className='d-flex align-items-center justify-content-center btn btn-warning px-4 my-4 text-white'>Review Order  <FontAwesomeIcon icon={faArrowRight} className={'ps-2 fs-3'}></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default OrderSummary;