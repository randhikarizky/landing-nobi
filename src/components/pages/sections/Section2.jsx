import React, { Component } from 'react'
import { BtnArrow } from '../buttons/BtnArrow'
import BigTable from '../table/BigTable'
import CompactTable from '../table/CompactTable'

export default class SectionTwo extends Component {
    render() {
        return (
            <>
                <div className="container-fluid" id="section-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm">
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
                                    <BigTable />

                                    <CompactTable />
                                </div>
                                <BtnArrow text='Explore More' />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
