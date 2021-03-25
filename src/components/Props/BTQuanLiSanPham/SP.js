import React, { Component } from 'react'

export default class SP extends Component {
    render() {
        let {product} = this.props;
        return (
            <div>
                 <div className="card text-white bg-primary">
                    <img className="card-img-top" height={300} src={product.hinhAnh} alt />
                    <div className="card-body">
                        <h4 className="card-title">{product.tenSP}</h4>
                        <p className="card-text">{product.giaBan}</p>
                        <button className= "btn btn-success" onClick = {() => {
                            this.props.viewProductdetail(product);        
                        }}> Xem chi tiet</button>
                        <button className = "btn btn-danger" onClick = {() => {
                            this.props.themSanPham(product);
                        }}>thêm giỏ hàng</button>
                    </div>
                </div>
            </div>
        )
    }
}
