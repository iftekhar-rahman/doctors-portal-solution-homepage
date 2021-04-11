import React from 'react';
import featured from '../../../img/features-service.png';
import './FeaturedService.css'

const FeaturedService = () => {
    return (
        <div className="featured-service">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 ">
                        <img src={featured} alt=""/>
                    </div>
                    <div className="col-md-7 align-self-center pe-5 ps-4">
                        <h2 className="mb-5">Exceptional Dental<br/> Care, on Your Terms</h2>
                        <p className="text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. In eius ipsum quos debitis tenetur doloribus sequi quam? Possimus exercitationem aspernatur necessitatibus expedita perspiciatis perferendis ipsum. Adipisci, mollitia excepturi vitae odio, illo cupiditate eligendi accusamus ipsam accusantium aliquid ipsa, necessitatibus sit amet assumenda molestias labore sapiente laborum tenetur ullam provident consequatur optio! Atque officiis ratione repudiandae mollitia rem beatae cum tempore quasi at recusandae. Quo nam nobis quas quibusdam nostrum numquam?</p>
                        <button className="btn btn-primary mt-4">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedService;