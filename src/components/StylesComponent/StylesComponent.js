import React, { Component } from 'react'
import './Styles1.css'
import styte from './Styles.module.css';

export default class StylesComponent extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <p className="text-red">CyberSoft 112 cao thang</p>

          <div className={`p-5 ${styte.textGreen} ${styte['background-black']} display-4`}>
            <p>hello</p>
          </div>
          <p style={{ backgroundColor: 'balck', padding: '15px', color: 'white', }}> xin chào</p>
        </div>
      </div>
    )
  }
}
