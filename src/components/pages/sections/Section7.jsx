import React, { Component } from 'react'

import { BtnStore } from '../buttons/BtnStore'

export default class SectionSeven extends Component {
    render() {
        return (
            <>
                <div className="container-fluid" id="section-7">
                    <div className="container">
                        <div className="row justify-content-center">
                            <h1 className="title">
                                So, What Are You Waiting For?
                            </h1>
                            <p className="subtitle">
                                Start growing your crypto and join countless crypto believers who have successfully grow with us!
                            </p>
                            <BtnStore />
                            <p className="small">
                                Risk warning: Buying, selling, holding and partaking in trading of cryptocurrencies are activities that are
                                subject to high market risk.
                                <br />
                                The violate and unpredictable nature of cryptocurrencies may result in significant loss.
                            </p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
