import React from 'react'

import AppBtn from '../../assets/img/btn-appstore.svg'
import PlayBtn from '../../assets/img/btn-playstore.svg'

export const BtnStore = () => {
    return (
        <>
            <div className="btn-container">
                <a href="https://apps.apple.com/id/app/nobi-grow-crypto-the-easy-way/id1510269362" target="_blank" rel="noreferrer">
                    <img className="img-fluid" src={AppBtn} alt="" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.usenobi" target="_blank" rel="noreferrer">
                    <img className="img-fluid" src={PlayBtn} alt="" />
                </a>
            </div>
        </>
    )
}
