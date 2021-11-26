import React, { Component } from 'react'

import '../components/style/main.scss'
import ArtRocket from '../components/assets/img/art-rocket.svg'
import AppBtn from '../components/assets/img/btn-appstore.svg'
import PlayBtn from '../components/assets/img/btn-playstore.svg'

export class Main extends Component {
    render() {
        return (
            <>
                <div className="container-fluid" id="navbar-container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container">
                            <a className="navbar-brand" href="#">Navbar</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Nobi</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Link</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropdown
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled">Disabled</a>
                                    </li>
                                </ul>
                                <form className="d-flex">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button class ="btn btn-outline-success" type ="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="container-fluid" id="section-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9 ttl-container">
                                <h1 className="title">
                                    Grow Crypto The Easy Way
                                </h1>
                                <p className="subtitle">
                                    Automate your crypto trading strategy and take your emotion out of the equation
                                </p>
                                <div className="btn-container">
                                    <a href="#">
                                        <img src={AppBtn} alt="" />
                                    </a>
                                    <a href="#">
                                        <img src={PlayBtn} alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-md">
                                <div className="img-container">
                                    <img src={ArtRocket} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid" id="section-2">
                    <div className="row">
                        <div className="col-md">
                            <div className="tab-container">
                                <div className="btn-group" role="group" >
                                    <input type="radio" className="btn-check" checked />
                                    <label class="btn btn-outline-primary" >Strategy</label>

                                    <input type="radio" class="btn-check" />
                                    <label class="btn btn-outline-primary" >Stalking</label>

                                    <input type="radio" class="btn-check" />
                                    <label class="btn btn-outline-primary" >Saving</label>
                                </div>
                            </div>
                            <div className="table-container">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">Strategy</th>
                                            <th scope="col">Marketcap</th>
                                            <th scope="col">Volume</th>
                                            <th scope="col">Est. Annual Yield</th>
                                            <th scope="col">Node Collateral</th>
                                            <th scope="col">Hosted Node</th>
                                            <th scope="col" colspan="3">1 Month</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">DASH</th>
                                            <td>Nova Kapital</td>
                                            <td>$148.574.33</td>
                                            <td>-12.45%</td>
                                            <td>-2.12%</td>
                                            <td>-212.3%</td>
                                            <td>+212.3%</td>
                                            <td>+212.3%</td>
                                            <td>+212.3%</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">SMART</th>
                                            <td>Nova Kapital</td>
                                            <td>$148.574.33</td>
                                            <td>-2.36%</td>
                                            <td>-1.45%</td>
                                            <td>+212.3%</td>
                                            <td>+212.3%</td>
                                            <td>+212.3%</td>
                                            <td>+212.3%</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">ZCOIN</th>
                                            <td>Nova Kapital</td>
                                            <td>$148.574.33</td>
                                            <td>-1.66%</td>
                                            <td>-1.21%</td>
                                            <td>+212.3%</td>
                                            <td>+212.3%</td>
                                            <td>+212.3%</td>
                                            <td>+212.3%</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Nova Obscura</th>
                                            <td>Nova Kapital</td>
                                            <td>$148.574.33</td>
                                            <td>-7.50%</td>
                                            <td>-2.22%</td>
                                            <td>+212.3%</td>
                                            <td>+212.3%</td>
                                            <td>+212.3%</td>
                                            <td>+212.3%</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">New Oscillator</th>
                                            <td>Nova Kapital</td>
                                            <td>$148.574.33</td>
                                            <td>-8.92%</td>
                                            <td>-3.23%</td>
                                            <td>-212.3%</td>
                                            <td>+212.3%</td>
                                            <td>+212.3%</td>
                                            <td>+212.3%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="btn-container">
                                <button className="btn btn-primary btn-arrow">
                                    Explore More
                                    <span>
                                        <i className="fas fa-arrow-right"></i>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid" id="section-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="img-container">

                                </div>
                            </div>
                            <div className="col-md ttl-container">
                                <h1 className="title">
                                    Create Your Own Strategy And Become a Strategy Maker
                                </h1>
                                <div className="btn-container">
                                    <button className="btn btn-primary btn-arrow">
                                        Learn More
                                        <span>

                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid" id="section-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-md">
                                <div className="ttl-container">
                                    <h1 className="title">
                                        Growing Crypto Has Never Been This Easy!
                                    </h1>
                                    <p className="subtitle">
                                        NOBI makes it safe and easy to trade with our Robo Trading! Just choose the available strategy and let our strategy makers do the magic for you.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                <div className="row img-container"></div>
                                <div className="row">
                                    <h2 className="title text-center">
                                        Download App
                                    </h2>
                                </div>
                            </div>
                            <div className="col-md">
                                <div className="row img-container"></div>
                                <div className="row">
                                    <h2 className="title text-center">
                                        Fund Your Wallet
                                    </h2>
                                </div>
                            </div>
                            <div className="col-md">
                                <div className="row img-container"></div>
                                <div className="row">
                                    <h2 className="title text-center">
                                        Start Following Strategy
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid" id="section-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md img-container"></div>
                            <div className="col-md-8 ttl-container">
                                <h1 className="title">
                                    Start With as Little as ₿0.01
                                </h1>
                                <p className="subtitle">
                                    You can start growing your bitcoin and other cryptocurrencies from as low as ₿ 0.01. 
                                    Trade better by following our Trading Strategy. Our technology will help you minimize risks and enhance your gain. 
                                    Simply choose & follow!
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="blue-bar"></div>
                            <div className="sponsor-container">
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid" id="section-6">
                    <div className="container">
                        <div className="row justify-content-center">
                            <h1 className="title">
                                So, What Are You Waiting For?
                            </h1>
                            <p className="subtitle">
                                Start growing your crypto and join countless crypto believers who have successfully grow with us!
                            </p>
                            <div className="btn-container">

                            </div>
                            <p className="small">
                                Risk warning: Buying, selling, holding and partaking in trading of cryptocurrencies are activities that are 
                                subject to high market risk. The violate and unpredictable nature of cryptocurrencies may result in significant loss.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid" id="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md left-container">
                                <div className="img-container"></div>
                                <div className="footer-text-container">
                                    <p className="subtitle">
                                        Copyright © 2020 Nobi. All trademarks and copyrights belong to their respective owners.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md mid-container">
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
                            <div className="col-md right-container">
                                <p className="subtitle">
                                    Join Our Community
                                </p>
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Main
