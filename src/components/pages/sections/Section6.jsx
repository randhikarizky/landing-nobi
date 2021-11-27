import React, { Component } from 'react'

import ArtBinance from '../../assets/img/art-binance.png'
import ArtBitmex from '../../assets/img/art-bitmex.png'
import ArtProdhunt from '../../assets/img/art-producthunt.png'
import ArtIndodax from '../../assets/img/art-indodax.png'

export default class SectionSix extends Component {
    render() {
        return (
            <>
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
                                    <img className="img-fluid img-sponsor" src={ArtBinance} alt="" />
                                    <img className="img-fluid img-sponsor" src={ArtBitmex} alt="" />
                                    <img className="img-fluid img-sponsor img-prodhunt" src={ArtProdhunt} alt="" />
                                    <img className="img-fluid img-sponsor img-indodax" src={ArtIndodax} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
