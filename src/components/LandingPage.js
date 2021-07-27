import React, { Component } from 'react'
import kbslide1 from '../kb_carpet.jpg'
import kbslide2 from '../keyswitch_bg.jpg'
import kbslide3 from '../kb_jpn.jpg'

import '../styles/LandingPage.css'

export class LandingPage extends Component {
    render() {
        return (
            <div className="LandingPage-body">
                <div id="carouselExampleIndicators" className="LandingPage-carousel carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                <div className="LandingPage-inner-carousel carousel-inner">
                    <div className="carousel-item active">
                        <img src={kbslide1} className="overlay-image d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>KeySwitch</h1>
                            <p>The community marketplace for keyboard enthusiasts</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={kbslide2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>KeySwitch</h1>
                            <p>The community marketplace for keyboard enthusiasts</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={kbslide3} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>KeySwitch</h1>
                            <p>The community marketplace for keyboard enthusiasts</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
            </div>
        )
    }
}

export default LandingPage

