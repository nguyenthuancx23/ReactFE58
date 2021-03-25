import React, { Component } from 'react'
import BT3CarouselComponent from './BT3CarouselComponent'
import BT3ProductListComponent from './BT3ProductListComponent'

export default class BT3ContentComponent extends Component {
    render() {
        return (
            <div>
                <BT3CarouselComponent/>
                <BT3ProductListComponent/>
            </div>
        )
    }
}
