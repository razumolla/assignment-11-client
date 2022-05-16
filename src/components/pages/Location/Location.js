import React from 'react';

const Location = () => {
    return (
        <div style={{ backgroundColor: "#F7F7F7" }} className="text-center py-2 mt-4 mb-4">
            <h2 className="text-center my-3 fw-bold ">Company Location</h2>
            <div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.366227547553!2d90.40918351490501!3d23.769969684579653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c786a47db021%3A0x52bd75bab68533ff!2sHyundai%20Bangladesh%20-%20Warehouse!5e0!3m2!1sen!2sbd!4v1651953486094!5m2!1sen!2sbd"
                    width="92%"
                    title="CarHouse"
                    height="200"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};

export default Location;