import React, { Component } from 'react'


import Art01 from '../../assets/img/art-01.png'
import Art02 from '../../assets/img/art-02.png'
import Art03 from '../../assets/img/art-03.png'

export default class SectionFour extends Component {
    render() {
        return (
            <>
                <div className="container-fluid" id="section-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm">
                                <div className="ttl-container">
                                    <h1 className="title">
                                        Growing Crypto Never Been This Easy!
                                    </h1>
                                    <p className="subtitle">
                                        NOBI makes it safe and easy to trade with our Robo Trading! Just choose the available strategy and let our strategy makers do the magic for you.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row steps-container">
                            <div className="col-sm steps">
                                <div className="row img-container">
                                    <img className="img-fluid img-steps" src={Art01} alt="" />
                                </div>
                                <div className="row">
                                    <h1 className="title text-center">
                                        Download App
                                    </h1>
                                </div>
                            </div>
                            <div className="col-sm steps">
                                <div className="row img-container">
                                    <img className="img-fluid img-steps" src={Art02} alt="" />
                                </div>
                                <div className="row">
                                    <h1 className="title text-center">
                                        Fund Your Wallet
                                    </h1>
                                </div>
                            </div>
                            <div className="col-sm steps">
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
            </>
        )
    }
}
