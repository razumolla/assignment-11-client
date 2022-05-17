import React from 'react';
import { toast } from 'react-toastify';

const AddProduct = () => {

    const handleAddProduct = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const supplyer = event.target.supplyer.value;
        const description = event.target.description.value;
        const img = event.target.img.value;
        console.log(name, price)

        const url = 'http://localhost:5000/addpd';
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                name, price, quantity, supplyer, description, img
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                event.target.reset();
            });

        toast('Product Add Successfully');
    }


    return (
        <div className='container'>
            <h2 className='text-center'>Add New Product</h2>

            <div className='w-50 mx-auto'>
                <form onSubmit={handleAddProduct}>
                    <div className="mb-3">
                        <input type="text" name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Product Name' />
                    </div>
                    <div className="mb-3">
                        <input type="text" name="price" className="form-control" id="exampleInputPassword1" placeholder='Price' />
                    </div>
                    <div className="mb-3">
                        <input type="text" name="quantity" className="form-control" id="exampleInputPassword1" placeholder='Quantity' />
                    </div>
                    <div className="mb-3">
                        <input type="text" name="supplyer" className="form-control" id="exampleInputPassword1" placeholder='Supplyer Name' />
                    </div>
                    <div className="mb-3">
                        <input type="text" name="description" className="form-control" id="exampleInputPassword1" placeholder='Description' />
                    </div>
                    <div className="mb-3">
                        <input type="text" name="img" className="form-control" id="exampleInputPassword1" placeholder='Img Url' />
                    </div>
                    <button type="submit" className="btn btn-primary">add Product</button>
                </form>
            </div>
        </div>
    )
};

export default AddProduct;