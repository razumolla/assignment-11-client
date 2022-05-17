import React from 'react';
import { useNavigate } from 'react-router-dom';
import './service.css'

const Service = ({ service }) => {
    const { _id, name, img, description, supplyer, price, quantity } = service;
    const navigate = useNavigate();
    const navigateToUpdateProduct = id => {
        navigate(`/inventory/${id}`)
    }
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <div className='service-body'>
                <h3> {name}</h3>
                <p>Price: $ {price}</p>
                <p>Quantity:  {quantity}</p>
                <p>Supplyer-Name: {supplyer}</p>
                <p><small>{description}</small></p>
                <button onClick={() => navigateToUpdateProduct(_id)} className='btn btn-primary w-100'>Manage Stoke </button>
            </div>
        </div>
    );
};

export default Service;