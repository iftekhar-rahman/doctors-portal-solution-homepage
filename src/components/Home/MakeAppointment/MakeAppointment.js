import React from 'react';
import './MakeAppointment.css';
import doctor from '../../../img/doctor-1.png';

const MakeAppointment = () => {
    return (
        <section className="make-appointment">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <img src={doctor} alt=""/>
                    </div>
                    <div className="col-md-7 py-5 text-white">
                        <h5 style={{color: '#1CC7C1'}} className="mb-3">APPOINTMENT</h5>
                        <h2 className="mb-4">Make an Appointment <br/> Today</h2>
                        <p>It is a long established fact that a reader will be distractedby the readable content of a page when looking at its </p>
                        <button className="btn btn-primary mt-5">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;