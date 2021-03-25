import React, { Component } from 'react'
import GioHang from './GioHang'
import SP from './SP'
export default class BTQuanLiSanPham extends Component {

    dataProduct = [
        {
            "maSP": 1,
            "tenSP": "VinSmart Live",
            "manHinh": "AMOLED, 6.2\", Full HD+",
            "heDieuHanh": "Android 9.0 (Pie)",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 5700000,
            "hinhAnh": "./img/vsphone.jpg"
        },

        {
            "maSP": 2,
            "tenSP": "Meizu 16Xs",
            "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels",
            "heDieuHanh": "Android 9.0 (Pie); Flyme",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 7600000,
            "hinhAnh": "./img/meizuphone.jpg"
        },

        {
            "maSP": 3,
            "tenSP": "Iphone XS Max",
            "manHinh": "OLED, 6.5\", 1242 x 2688 Pixels",
            "heDieuHanh": "iOS 12",
            "cameraSau": "Chính 12 MP & Phụ 12 MP",
            "cameraTruoc": "7 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 27000000,
            "hinhAnh": "./img/applephone.jpg"
        }
    ]

    state = {
        productDetail: {
            "maSP": 1,
            "tenSP": "VinSmart Live",
            "manHinh": "AMOLED, 6.2\", Full HD+",
            "heDieuHanh": "Android 9.0 (Pie)",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 5700000,
            "hinhAnh": "./img/vsphone.jpg"
        },
        gioHang: [
            { maSP: 1, tenSP: 'iphone', hinhAnh: './img/vsphone.jpg', soLuong: 1, giaBan: 1000 }
        ]
   
    }


    themSanPham = (spClick) => {
        // this.setState
        // từ sản phẩm click được tạo ra giỏ hàng
        const spGH = {...spClick, soLuong:1};

        let gioHangCapNhat = [...this.state.gioHang];

        // kiểm tra sản phẩm có trong giỏ hàng chưa
        let index = gioHangCapNhat.findIndex(sp => sp.maSP === spGH.maSP);

        if(index !== -1) { // sản phấm đã có trong giỏ hàng
                gioHangCapNhat[index].soLuong += 1;
        } else { // không tim thấy sản phẩm trong giỏ hàng => thêm vào
            gioHangCapNhat.push(spGH);
        }


        // cập nhật lại state
        this.setState ({
            gioHang:gioHangCapNhat
        })
    }

   
    renderProduct = () => {
        return this.dataProduct.map((product, index) => {
            return <div className="col-4" key={index}>

                <SP themSanPham= {this.themSanPham} product={product} viewProductdetail={this.viewProductdetail} />
                {/* <div className="card text-white bg-primary">
                    <img className="card-img-top" height={300} src={product.hinhAnh} alt />
                    <div className="card-body">
                        <h4 className="card-title">{product.tenSP}</h4>
                        <p className="card-text">{product.giaBan}</p>
                        <button className= "btn btn-success" onClick = {() => {
                            this.viewProductdetail(product);
                        }}> Xem chi tiet</button>
                    </div>
                </div> */}
            </div>
        })
    }

    viewProductdetail = (producClick) => {
        // this.setstate => thay doi du lieu cua productdetail va render lai giao dien
        this.setState({
            productDetail: producClick
        })
    }

    render() {
        let { productDetail } = this.state;
        return (
            <div className="container">

                <GioHang gioHang = {this.state.gioHang}/>

                <h3 className="text-center display-4"> Danh sach san pham</h3>
                <div className="row">
                    {this.renderProduct()}
                </div>

                <div className="m-5">
                    <div className="row">
                        <div className="col-4">
                            <h3 className="text-center">{productDetail.tenSP}</h3>
                            <img src={productDetail.hinhAnh} height={300} />
                        </div>

                        <div className="col-8">
                            <h3 className="text-center">Thong tin san pham</h3>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Ten san pham</th>
                                        <th>{productDetail.tenSP}</th>
                                    </tr>
                                    <tr>
                                        <th>man hinh</th>
                                        <th>{productDetail.manHinh}</th>
                                    </tr>
                                    <tr>
                                        <th>he dieu hanh</th>
                                        <th>{productDetail.heDieuHanh}</th>
                                    </tr>
                                    <tr>
                                        <th>ram</th>
                                        <th>{productDetail.ram}</th>
                                    </tr>
                                    <tr>
                                        <th>camera sau</th>
                                        <th>{productDetail.cameraSau}</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
