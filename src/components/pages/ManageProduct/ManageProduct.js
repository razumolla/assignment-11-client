import React from 'react';
import useCar from '../../hooks/useCar';

const ManageProduct = ({ service }) => {
    const { _id, name, img, price } = service;
    const [services, setServices] = useCar();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            const url = `http://localhost:5000/product/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = services.filter(car => car._id !== id);
                    setServices(remaining);
                })
        }
    }

    return (
        <>
            <div className='service'>
                <img className='w-100' src={img} alt="" />
                <div className='service-body'>
                    <h3> {name}</h3>
                    <p>Price: $ {price}</p>
                    <button className='btn btn-danger w-100' onClick={() => handleDelete(_id)}>Delete Item</button>
                </div>
            </div>
        </>
    );
};

export default ManageProduct;