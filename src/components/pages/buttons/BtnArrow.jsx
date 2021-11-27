import React from 'react'

export const BtnArrow = ({ text }) => {
    return (
        <>
            <div className="btn-container">
                <button className="btn btn-primary btn-arrow">
                    <span className="btn-txt">
                        { text }
                    </span>
                    <div className="vr" />
                    <span className="btn-icon">
                        <i className="fas fa-arrow-right"></i>
                    </span>
                </button>
            </div>
        </>
    )
}
