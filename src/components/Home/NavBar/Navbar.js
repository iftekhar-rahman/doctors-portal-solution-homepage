import React from 'react';
import './NavBar.css';

const Navbar = () => {
    return (
        <div className="container">
            <nav class="mainmenu navbar navbar-expand-lg navbar-light ">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item mr-5">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item mr-5">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item mr-5">
                                <a class="nav-link" href="#">Dental Services</a>
                            </li>
                            <li class="nav-item mr-5">
                                <a class="nav-link text-white" href="#">Reviews</a>
                            </li>
                            <li class="nav-item mr-5">
                                <a class="nav-link text-white" href="#">Blog</a>
                            </li>
                            <li class="nav-item mr-5">
                                <a class="nav-link text-white" href="#">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;