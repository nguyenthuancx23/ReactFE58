import React, { Component } from 'react'
import BT3ProductItemComponent from './BT3ProductItemComponent'

export default class BT3ProductListComponent extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <BT3ProductItemComponent />
                        </div>
                        <div className="col-3">
                            <BT3ProductItemComponent />
                        </div>
                        <div className="col-3">
                            <BT3ProductItemComponent />
                        </div>
                        <div className="col-3">
                            <BT3ProductItemComponent />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
