import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../Firebase/Firebase.init';

const AddProduct = () => {
    const [user, loading, error] = useAuthState(auth);

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
                // 'authorization': `${user.email} ${localStorage.getItem("accessToken")}`,
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
                    <div class="mb-3">
                        <input type="text" name="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Product Name' />
                    </div>
                    <div class="mb-3">
                        <input type="text" name="price" class="form-control" id="exampleInputPassword1" placeholder='Price' />
                    </div>
                    <div class="mb-3">
                        <input type="text" name="quantity" class="form-control" id="exampleInputPassword1" placeholder='Quantity' />
                    </div>
                    <div class="mb-3">
                        <input type="text" name="supplyer" class="form-control" id="exampleInputPassword1" placeholder='Supplyer Name' />
                    </div>
                    <div class="mb-3">
                        <input type="text" name="description" class="form-control" id="exampleInputPassword1" placeholder='Description' />
                    </div>
                    <div class="mb-3">
                        <input type="text" name="img" class="form-control" id="exampleInputPassword1" placeholder='Img Url' />
                    </div>
                    <button type="submit" class="btn btn-primary">add Product</button>
                </form>
            </div>
        </div>
    )
};

export default AddProduct;