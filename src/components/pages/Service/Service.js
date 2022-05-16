import React from 'react';
import { useNavigate } from 'react-router-dom';
import './service.css'

const Service = ({ service }) => {
    const { _id, name, img, description, supplyer, price, quantity } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`)
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
                <button onClick={() => navigateToServiceDetail(_id)} className='btn btn-primary'>Update: {name}</button>
            </div>
        </div>
    );
};

export default Service;