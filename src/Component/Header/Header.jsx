import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <nav data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="500"
        className='header d-flex align-items-center justify-content-around'>
            <div>
                <img src={logo} alt="" className='img-fluid'/>
            </div>
            <div>
                <ul className='items d-flex '>
                    <li><a href="" className="item">Order</a></li>
                    <li><a href="" className="item">Order Review</a></li>
                    <li><a href="" className="item">Manage Inventory</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;