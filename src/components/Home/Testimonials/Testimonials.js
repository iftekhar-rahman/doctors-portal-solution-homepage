import React from 'react';
import './Testimonials.css';
import winson from '../../../img/author-1.png';
import ema from '../../../img/author-2.png';
import aliza from '../../../img/author-3.png';
import TestimonialsDetail from '../TestimonialsDetail/TestimonialsDetail';

const testimonialsData = [
    {
        quote: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        name: 'Winson Herry',
        from: 'California',
        img: winson
    },
    {
        quote: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        name: 'Ema',
        from: 'Washington',
        img: ema
    },
    {
        quote: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        name: 'Aliza',
        from: 'New York',
        img: aliza
    }
]

const Testimonials = () => {
    return (
        <section className="testimonials-section">
            <div className="container">
                <div className="row">`
                    <div className="mb-5">
                        <h5 style={{color: '#1CC7C1'}}>TESTIMONIAL</h5>
                        <h2>What’s Our Patients <br/> Says</h2>
                    </div>
                </div>
                <div className="row">
                    {
                        testimonialsData.map(testimonial => <TestimonialsDetail testimonial={testimonial}></TestimonialsDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;