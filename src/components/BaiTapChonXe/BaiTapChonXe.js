import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {

  state = {
    srcImg: './img/car/products/black-car.jpg'
  }

  changeColor = (color) => {
    this.setState({
      srcImg: `./img/car/products/${color}-car.jpg`
    })
  }
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-6">
            <img src={this.state.srcImg} className="w-100" alt="123" />
          </div>
          <div className="col-6">
            <button className="mr-5" style={{ background: 'red' }} onClick={() => {
              this.changeColor('red');
            }}>Red</button>
            <button className="mr-5" style={{ background: 'silver' }} onClick={() => {
              this.changeColor('silver')
            }}>silver</button>
            <button className="mr-5" style={{ background: 'black' }} onClick={() => {
              this.changeColor('black')
            }}>black</button>
            <button className="mr-5" style={{ background: 'gray' }} onClick={() => {
              this.changeColor('steel')
            }}>steel</button>
          </div>
        </div>
      </div>
    )
  }
}
