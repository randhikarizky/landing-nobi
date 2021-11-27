import React, { Component } from 'react'

import ArtNobilogo from "../../assets/img/art-nobilogo.png"

export default class Navbar extends Component {
    render() {
        return (
            <>
                <div className="container-fluid" id="navbar-container">
                    <nav className="navbar fixed-top navbar-expand-lg">
                        <div className="container">
                            <a className="navbar-brand" href="#" data-bs-toggle="collapse" data-bs-target="#navbarNobi" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <img className="img-fluid" src={ArtNobilogo} alt="" />
                            </a>
                            <div className="collapse navbar-collapse" id="navbarNobi">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Strategy Maker</a>
                                    </li>
                                    <div className="vr" />
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Blog</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </>
        )
    }
}
