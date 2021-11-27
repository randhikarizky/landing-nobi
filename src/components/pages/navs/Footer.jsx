import React, { Component } from 'react'

import ArtNobilogo from "../../assets/img/art-nobilogo.png"

export default class Footer extends Component {
    render() {
        return (
            <>
                <div className="container-fluid" id="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm left-container">
                                <div className="img-container">
                                    <img className="img-fluid" src={ArtNobilogo} alt="" />
                                </div>
                                <div className="footer-text-container">
                                    <p className="subtitle">
                                        Copyright © 2020 Nobi.
                                        <br />
                                        All trademarks and copyrights belong to their respective owners.
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm mid-container">
                                <ul>
                                    <li>
                                        English
                                    </li>
                                    <li>
                                        Terms
                                    </li>
                                    <li>
                                        Contact Us
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm right-container">
                                <p className="subtitle">
                                    Join Our Community
                                </p>
                                <ul>
                                    <li>
                                        <a href="">
                                            <i class="fab fa-blogger-b"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <i class="fab fa-youtube"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <i class="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <i class="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <i class="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <i class="fab fa-telegram-plane"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
