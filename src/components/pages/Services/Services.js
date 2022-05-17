import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className='container'>
            <div className="row">
                <h1 className=' text-primary text-center mt-5'> Inventory Items</h1>
                <div className="services-container">
                    {
                        services.slice(0, 6).map(service => <Service
                            key={service._id}
                            service={service}
                        >
                        </Service>)
                    }
                </div>
                <div className='text-center mt-3'>
                    <Link to="/manageproducts">
                        <button className='btn btn-info'>
                            <h4>Manage Inventory Items</h4>
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Services;