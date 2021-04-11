import React from 'react';
import chair from '../../../img/banner.png';

const HeaderMain = () => {
    return (
        <main style={{height: '600px'}} className="container d-flex align-items-center">
            <div className="row">
                <div className="col-md-5 offset-md-1 pe-5">
                    <h1 style={{color: '#3A4256', marginBottom: '20px'}}>Your New Smile <br/> Starts Here</h1>
                    <p className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque iure, architecto error quam asperiores ullam nam, eius facere et similique rerum incidunt temporibus totam tempora perferendis harum. Reiciendis, inventore amet?</p>
                    <button className="btn btn-primary mt-4">Get appointment</button>
                </div>
                <div className="col-md-6">
                    <img src={chair} alt="" className="img-fluid"/>
                </div>
            </div>
        </main>
    );
};

export default HeaderMain;