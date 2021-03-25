import React, { Component } from 'react'

export default class HandlEvent extends Component {

    handleClick = () => {
        alert('hi BÁO')
    }

    ShowMess = (mess) => {
        alert(mess)
    }

    render() {
        return (
            <div className="container pt-5">
                {/* <button id = "btnSubmit" onClick = {function () {
                    alert('helo helo');
                }}>Click</button> */}

                <button id="btnSubmit" onClick={this.handleClick}>Click</button>

                <button className="btn- btn-success" onClick = {() => {this.ShowMess('FE58')}} > Show mess </button>
            </div>
        )
    }
}

