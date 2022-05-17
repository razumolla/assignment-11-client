import React from 'react';
import { Link } from 'react-router-dom';
import useCar from '../../hooks/useCar';
import ManageProduct from '../ManageProduct/ManageProduct';

const ManageProducts = () => {
    const [services] = useCar([]);
    return (
        <div className='container'>
            <div className="row">
                <h1 className=' text-primary text-center mt-5'> Our All Product here and you can delete Any Item.</h1>
                <div className="services-container">
                    {
                        services.map(service => <ManageProduct
                            key={service._id}
                            service={service}
                        >
                        </ManageProduct>)
                    }
                </div>
                <div className='text-center mt-3'>
                    <Link to="/addproduct">
                        <button className='btn btn-info'>
                            <h4>Add New Product</h4>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;