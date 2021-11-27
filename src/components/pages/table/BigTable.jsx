import React, { Component } from 'react'

export default class BigTable extends Component {
    render() {
        return (
            <>
                <table className="big-table">
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
            </>
        )
    }
}
