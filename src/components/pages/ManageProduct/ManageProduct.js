import React from 'react';

const ManageProduct = ({ service }) => {
    const { _id, name, img, description, supplyer, price, quantity } = service;
    return (
        <>
            <div className='service'>
                <img className='w-100' src={img} alt="" />
                <div className='service-body'>
                    <h3> {name}</h3>
                    <p>Price: $ {price}</p>
                    <p>Quantity:  {quantity}</p>
                    <p>Supplyer-Name: {supplyer}</p>
                    <p><small>{description}</small></p>
                    <button className='btn btn-primary'>Delete: {name}</button>
                </div>
            </div>
        </>
    );
};

export default ManageProduct;