import React, { Component } from 'react'
import BeginLaptopComponent from './BeginLaptopComponent'
import BeginPromotionComponent from './BeginPromotionComponent'
import BeginSmartphoneComponent from './BeginSmartphoneComponent'
import CarouselComponent from './CarouselComponent'
import HeaderComponent from './HeaderComponent'
import Product from './Product'

export default class BaiTapLayout extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <CarouselComponent />
        {/* <BeginSmartphoneComponent/> */}
        {/* <BeginSmartphoneComponent/> */}
        {/* <BeginLaptopComponent/> */}
        <Product />
        <BeginPromotionComponent/>
        
      </div>
    )
  }
}
