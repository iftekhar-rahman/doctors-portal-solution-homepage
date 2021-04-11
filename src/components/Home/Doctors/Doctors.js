import React from 'react';
import DoctorsDetail from '../DoctorsDetail/DoctorsDetail';
import doctoreOne from '../../../img/doctor-2.png';
import doctoreTwo from '../../../img/doctor-2.png';
import doctoreThree from '../../../img/doctor-2.png';
import './Doctors.css'

const doctorsData = [
    {
        doctorImg: doctoreOne,
        name: 'Dr. Caudi',
        phone: '+61 452 200 126',
    },
    {
        doctorImg: doctoreTwo,
        name: 'Dr. Doe',
        phone: '+61 452 200 126',
    },
    {
        doctorImg: doctoreThree,
        name: 'Dr. John',
        phone: '+61 452 200 126',
    },
]

const Doctors = () => {
    return (
        <section className="doctors-container">
            <div className="container">
                <div className="text-center mb-5 pb-5">
                    <h5 style={{color: '#1CC7C1'}}>OUR DOCTORS</h5>
                </div>
                <div className="row">
                    {
                        doctorsData.map(doctor => <DoctorsDetail doctor={doctor}></DoctorsDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;