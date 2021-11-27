import React, { Component } from 'react'

import ArtCoin from '../../assets/img/art-coin.svg'
import AppBtn from '../../assets/img/btn-appstore.svg'
import PlayBtn from '../../assets/img/btn-playstore.svg'
import { BtnStore } from '../buttons/BtnStore'

export default class SectionFive extends Component {
    render() {
        return (
            <>
                <div className="container-fluid" id="section-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm img-container">
                                <img className="img-fluid" src={ArtCoin} alt="" />
                            </div>
                            <div className="col-sm-8 ttl-container">
                                <h1 className="title">
                                    Start With as Little as ₿0.01
                                </h1>
                                <p className="subtitle">
                                    You can start growing your bitcoin and other cryptocurrencies from as low as ₿ 0.01.
                                    Trade better by following our Trading Strategy. Our technology will help you minimize risks and enhance your gain.
                                    Simply choose & follow!
                                </p>
                            </div>

                            <BtnStore />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
