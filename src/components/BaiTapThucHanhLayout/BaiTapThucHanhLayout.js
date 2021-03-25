import React, { Component } from 'react'
import BT3ContentComponent from './BT3ContentComponent'
import BT3FooterComponent from './BT3FooterComponent'
import BT3headerComponent from './BT3headerComponent'

export default class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <div>
                <BT3headerComponent/>
                <BT3ContentComponent/>
                <BT3FooterComponent/>
            </div>
        )
    }
}
