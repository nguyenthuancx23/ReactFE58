import React, { Component } from 'react'

export default class GioHang extends Component {

    renderGioHang = () => {
        return this.props.gioHang.map((spGH, index) => {
            return <tr key = {index}>
                <td>{spGH.maSP}</td>
                <td><img src={spGH.hinhAnh} height="50" /></td>
                <td>{spGH.tenSP}</td>
                <td>{spGH.soLuong}</td>
                <td>{spGH.giaBan}</td>
                <td>{spGH.soLuong * spGH.giaBan}</td>
                <td><button className="btn btn-danger">Xoa</button></td>
            </tr>
        })
    }

    render() {
        return (
            <div className="mt-5">
                <h3>Gio Hang</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Ma San Pham</th>
                            <th>Hinh anh</th>
                            <th>ten san pham</th>
                            <th>so luong</th>
                            <th>gia ban</th>
                            <th>thanh tien</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderGioHang()}
                    </tbody>
                </table>
            </div>
        )
    }
}
