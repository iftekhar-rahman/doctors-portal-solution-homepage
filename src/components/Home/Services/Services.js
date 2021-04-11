import React from 'react';
import './Services.css';
import fluoride from '../../../img/fluoride.png';
import cavity from '../../../img/cavity.png';
import whitening from '../../../img/whitening.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: 'Fluoride Treatment',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        img: cavity
    },
    {
        name: 'Teath Whitening',
        img: whitening
    }
]

const Services = () => {
    return (
        <section className="container services-container">
            <div className="text-center mb-5 pb-5">
                <h5 style={{color: '#1CC7C1'}}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="row">
                {
                    serviceData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                }
            </div>
        </section>
    );
};

export default Services;