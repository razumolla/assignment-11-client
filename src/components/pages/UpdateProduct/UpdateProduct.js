import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useUpdateProduct from '../../hooks/useUpdateProduct';
import './UpdateProduct.css'

const UpdateProduct = () => {
    const { id } = useParams();
    const [service] = useUpdateProduct(id);
    // delevered data
    const [car, setCar] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
            .then((res) => res.json())
            .then(data => setCar(data));
    }, [id, car]);

    const handleQuantityDecrement = () => {
        const quantity = car.quantity - 1;
        const url = `http://localhost:5000/product/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ quantity }),
        })
            .then((res) => res.json())
            .then((result) => {
                alert("Delivered One Car SuccessFully");
            });
    };
    // Update data > re-stoke quantity
    const handleUpdateStoke = event => {
        event.preventDefault();
        const quantity = event.target.number.value;
        const updatedStoke = { quantity };
        // send data to the user
        const url = `http://localhost:5000/product/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedStoke)
        })
            .then(res => res.json())
            .then(data => {
                alert('User added successfully');
                event.target.reset();
            })
    }




    return (
        <div>
            <div className='productDetails mb-5 container'>
                <img src={service.img} alt="" />
                <div className='productDetails-body'>
                    <div className='w-50 ps-2 border'>
                        <h3>{service.name}</h3>
                        <p> <strong>Price</strong>: $ {service.price}</p>
                        <p> <strong>Quantity</strong>:  {service.quantity}</p>
                        <p> <strong>Supplyer-Name</strong>: {service.supplyer}</p>
                        <p><small>{service.description}</small></p>
                    </div>

                    <div className='w-50 p-3'>
                        <button
                            onClick={handleQuantityDecrement}
                            className="btn btn-danger w-50 mt-3"
                        >
                            Delivered
                        </button>
                        <hr />

                        <h4>Want To Restock Cars?</h4>
                        <form onSubmit={handleUpdateStoke}>
                            <input type="text" name="number" placeholder='Quantity' required />
                            <br />
                            <input type="submit" value="Restoke Car" />
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UpdateProduct;