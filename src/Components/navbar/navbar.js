import React from 'react';
import { Link } from 'react-router-dom';
import classes from './navbar.module.css';

const navbar = () => {
    return (
        <button className="btn" ><Link to="/products"><i className="fas fa-arrow-circle-left"></i>Back To Products</Link></button>
    )
}

export default navbar;