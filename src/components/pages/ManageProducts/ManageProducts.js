import React from 'react';
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
            </div>
        </div>
    );
};

export default ManageProducts;