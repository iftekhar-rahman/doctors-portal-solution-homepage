import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'

const infoData = [
    {
        title: 'Opening hours',
        description: 'We are open',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit hour loaction',
        description: 'Brooklyn, NewYork 10003, USA',
        icon: faMapMarker,
        background: 'dark'
    },
    {
        title: 'Call Us Now',
        description: '+88018231434',
        icon: faPhone,
        background: 'primary'
    }
]

const BusinessInfo = () => {
    return (
        <section className="container">
            <div className="row">
                {
                    infoData.map(info => <InfoCard info={info}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;