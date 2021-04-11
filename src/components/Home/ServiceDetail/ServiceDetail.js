import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{height: '50px', marginBottom: '20px'}} src={service.img} alt=""/>
            <h5 className="mb-3 mt-3">{service.name}</h5>
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, similique.</p>
        </div>
    );
};

export default ServiceDetail;