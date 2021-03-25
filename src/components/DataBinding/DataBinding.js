import React, { Component } from 'react'

export default class DataBinding extends Component {
    name= 'cyber'; // thuộc tính
    

    renderSinhVien = () => {
        let sinhvien = {
            ma :1,
            ten : 'nguyen van a'
        }
        // nội dung hàm hiện thị lên phương thức render phải trả về 1 component hoặc chuỗi số
        return <div>
            <p> mã : {sinhvien.ma}</p>
            <p> tên : {sinhvien.ten}</p>
        </div>
    }
    render() {
        let title = 'cybersoft'; // biến
        let renderTitle = ()  => {
            return <div>Hàm trong hàm</div>
        }

        return (
            <div className = "container">
                {/* có thể binding cả hai */}
                <p>{this.name}</p>
                <p id = "title" className = "display-4">{title}</p>
                {this.renderSinhVien()}
                {renderTitle()}
            </div>
        )
    }
}
