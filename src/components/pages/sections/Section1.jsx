import React, { Component } from 'react'

import ArtRocket from '../../assets/img/art-rocket.svg'
import { BtnStore } from '../buttons/BtnStore'

export default class SectionOne extends Component {
    render() {
        return (
            <>
                <div className="container-fluid" id="section-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-9 ttl-container">
                                <h1 className="title">
                                    Grow Crypto The Easy Way
                                </h1>
                                <p className="subtitle">
                                    Automate your crypto trading strategy and take your emotion out of the equation
                                </p>
                                <BtnStore />
                            </div>
                            <div className="col-sm">
                                <div className="img-container">
                                    <img className="img-fluid" src={ArtRocket} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
