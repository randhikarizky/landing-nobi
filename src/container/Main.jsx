import React, { Component } from 'react'

import '../components/style/main.scss'
import ArtRocket from '../components/assets/img/art-rocket.svg'
import AppBtn from '../components/assets/img/btn-appstore.svg'
import PlayBtn from '../components/assets/img/btn-playstore.svg'
import ArtStonks from '../components/assets/img/art-stonks.svg'
import Art01 from '../components/assets/img/art-01.png'
import Art02 from '../components/assets/img/art-02.png'
import Art03 from '../components/assets/img/art-03.png'
import ArtCoin from '../components/assets/img/art-coin.svg'
import ArtBinance from  '../components/assets/img/art-binance.png'
import ArtBitmex from  '../components/assets/img/art-bitmex.png'
import ArtProdhunt from  '../components/assets/img/art-producthunt.png'
import ArtNobilogo from '../components/assets/img/art-nobilogo.png'

export class Main extends Component {
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
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Nobi</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Link</a>
                                    </li>
                                </ul>
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
                                        <img className="img-fluid"  src={AppBtn} alt="" />
                                    </a>
                                    <a href="#">
                                        <img className="img-fluid"  src={PlayBtn} alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-md">
                                <div className="img-container">
                                    <img className="img-fluid"  src={ArtRocket} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid" id="section-2">
                    <div className="container">
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
                                    <table className="">
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
                                                <td className="title" scope="row">DASH</td>
                                                <td className="title">Nova Kapital</td>
                                                <td className="title">$148.574.33</td>
                                                <td className="title min">-12.45%</td>
                                                <td className="title min">-2.12%</td>
                                                <td className="title min">-212.3%</td>
                                                <td className="title plus">+212.3%</td>
                                                <td className="title plus">+212.3%</td>
                                                <td className="title plus">+212.3%</td>
                                            </tr>
                                            <tr>
                                                <td className="title" scope="row">SMART</td>
                                                <td className="title">Nova Kapital</td>
                                                <td className="title">$148.574.33</td>
                                                <td className="title min">-2.36%</td>
                                                <td className="title min">-1.45%</td>
                                                <td className="title plus">+212.3%</td>
                                                <td className="title plus">+212.3%</td>
                                                <td className="title plus">+212.3%</td>
                                                <td className="title plus">+212.3%</td>
                                            </tr>
                                            <tr>
                                                <td className="title" scope="row">ZCOIN</td>
                                                <td className="title">Nova Kapital</td>
                                                <td className="title">$148.574.33</td>
                                                <td className="title min">-1.66%</td>
                                                <td className="title min">-1.21%</td>
                                                <td className="title plus">+212.3%</td>
                                                <td className="title plus">+212.3%</td>
                                                <td className="title plus">+212.3%</td>
                                                <td className="title plus">+212.3%</td>
                                            </tr>
                                            <tr>
                                                <td className="title" scope="row">Nova Obscura</td>
                                                <td className="title">Nova Kapital</td>
                                                <td className="title">$148.574.33</td>
                                                <td className="title min">-7.50%</td>
                                                <td className="title min">-2.22%</td>
                                                <td className="title plus">+212.3%</td>
                                                <td className="title plus">+212.3%</td>
                                                <td className="title plus">+212.3%</td>
                                                <td className="title plus">+212.3%</td>
                                            </tr>
                                            <tr>
                                                <td className="title" scope="row">New Oscillator</td>
                                                <td className="title">Nova Kapital</td>
                                                <td className="title">$148.574.33</td>
                                                <td className="title min">-8.92%</td>
                                                <td className="title min">-3.23%</td>
                                                <td className="title plus">-212.3%</td>
                                                <td className="title plus">+212.3%</td>
                                                <td className="title plus">+212.3%</td>
                                                <td className="title plus">+212.3%</td>
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
                </div>
                <div className="container-fluid" id="section-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="img-container">
                                    <img className="img-fluid"  src={ArtStonks} alt="" />
                                </div>
                            </div>
                            <div className="col-md ttl-container">
                                <h1 className="title">
                                    Create Your Own Strategy <br />
                                    And Become a Strategy Maker
                                </h1>
                                <div className="btn-container">
                                    <button className="btn btn-primary btn-arrow">
                                        Learn More
                                        <span>
                                            <i className="fas fa-arrow-right"></i>
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
                        <div className="row steps-container">
                            <div className="col-md">
                                <div className="steps">
                                    <div className="row img-container">
                                        <img className="img-fluid img-steps" src={Art01} alt="" />
                                    </div>
                                    <div className="row">
                                        <h1 className="title text-center">
                                            Download App
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md">
                                <div className="steps">
                                    <div className="row img-container">
                                        <img className="img-fluid img-steps" src={Art02} alt="" />
                                    </div>
                                    <div className="row">
                                        <h1 className="title text-center">
                                            Fund Your Wallet
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md">
                                <div className="steps">
                                    <div className="row img-container">
                                        <img className="img-fluid img-steps" src={Art03} alt="" />
                                    </div>
                                    <div className="row">
                                        <h1 className="title text-center">
                                            Start Following Strategy
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid" id="section-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md img-container">
                                <img className="img-fluid"  src={ArtCoin} alt="" />
                            </div>
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
                    </div>
                </div>
                <div className="blue-bar"></div>
                <div className="container-fluid" id="section-6">
                    <div className="container">
                        <div className="row">
                            <div className="sponsor-container">
                                <div className="ttl-container">
                                    <h1 className="title">
                                        Powered By Industry Best
                                    </h1>
                                </div>
                                <div className="img-container">
                                    <img className="img-fluid"  src={ArtBinance} className="img-sponsor" alt="" />
                                    <img className="img-fluid"  src={ArtBitmex} className="img-sponsor" alt="" />
                                    <img className="img-fluid"  src={ArtProdhunt} className="img-sponsor" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid" id="section-7">
                    <div className="container">
                        <div className="row justify-content-center">
                            <h1 className="title">
                                So, What Are You Waiting For?
                            </h1>
                            <p className="subtitle">
                                Start growing your crypto and join countless crypto believers who have successfully grow with us!
                            </p>
                            <div className="btn-container">
                                <a href="#">
                                    <img className="img-fluid"  src={AppBtn} alt="" />
                                </a>
                                <a href="#">
                                    <img className="img-fluid"  src={PlayBtn} alt="" />
                                </a>
                            </div>
                            <p className="small">
                                Risk warning: Buying, selling, holding and partaking in trading of cryptocurrencies are activities that are 
                                subject to high market risk. 
                                <br />
                                The violate and unpredictable nature of cryptocurrencies may result in significant loss.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid" id="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md left-container">
                                <div className="img-container">
                                    <img className="img-fluid"  src={ArtNobilogo} alt="" />
                                </div>
                                <div className="footer-text-container">
                                    <p className="subtitle">
                                        Copyright © 2020 Nobi.
                                        <br />
                                        All trademarks and copyrights belong to their respective owners.
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

export default Main
