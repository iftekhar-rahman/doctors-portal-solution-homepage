import React from 'react';
import './TestimonialsDetail.css';

const TestimonialsDetail = ({testimonial}) => {
    return (
        <div className="col-md-4">
            <div className="single-testimonial">
                <p className="text-secondary">{testimonial.quote}</p>
                <div className="author">
                    <img src={testimonial.img} alt=""/>
                    <h6>{testimonial.name} <span>{testimonial.from}</span></h6>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsDetail;