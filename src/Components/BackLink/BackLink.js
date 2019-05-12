import React from 'react';
import { Link } from 'react-router-dom';
import  './backlink.module.css';

const backlink = () => {
    return (
        <button className="btn" ><Link to="/products"><i className="fas fa-arrow-circle-left"></i>Back To Products</Link></button>
    )
}

export default backlink;