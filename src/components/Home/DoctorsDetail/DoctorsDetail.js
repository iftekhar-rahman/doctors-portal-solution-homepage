import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const DoctorsDetail = ({doctor}) => {
    return (
        <div className="col-md-4 text-center">
            <img src={doctor.doctorImg} alt=""/>
            <h5 className="mb-3 mt-3">{doctor.name}</h5>
            <p className="text-secondary"><FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> {doctor.phone}</p>
        </div>
    );
};

export default DoctorsDetail;