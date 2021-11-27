import React, { Component } from 'react'


import ArtStonks from '../../assets/img/art-stonks.svg'
import { BtnArrow } from '../buttons/BtnArrow'

export default class SectionThree extends Component {
    render() {
        return (
            <>
                <div className="container-fluid" id="section-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="img-container">
                                    <img className="img-fluid" src={ArtStonks} alt="" />
                                </div>
                            </div>
                            <div className="col-sm ttl-container">
                                <h1 className="title">
                                    Create Your Own Strategy <br />
                                    And Become a Strategy Maker
                                </h1>
                                <BtnArrow text="Learn More" />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
