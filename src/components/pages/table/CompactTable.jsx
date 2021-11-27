import React, { Component } from 'react'

export default class CompactTable extends Component {
    render() {
        return (
            <>
                <table className="compact-table">
                    <thead>
                        <tr>
                            <th scope="col">Strategy</th>
                            <th scope="col">Volume</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="title">Nova Kapital</td>
                            <td className="title">$148.574.33</td>
                        </tr>
                        <tr>
                            <td className="title">Nova Kapital</td>
                            <td className="title">$148.574.33</td>
                        </tr>
                        <tr>
                            <td className="title">Nova Kapital</td>
                            <td className="title">$148.574.33</td>
                        </tr>
                        <tr>
                            <td className="title">Nova Kapital</td>
                            <td className="title">$148.574.33</td>
                        </tr>
                        <tr>
                            <td className="title">Nova Kapital</td>
                            <td className="title">$148.574.33</td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }
}
