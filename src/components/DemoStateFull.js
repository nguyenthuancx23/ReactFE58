// rcc
import React, { Component } from 'react'

export default class DemoStateFull extends Component {
    // có thể  tạo nhiều phương thức và thuộc tính cho component
    // nôi dung phương thức render sẽ là nội dung của giao giện thẻ <demostatefull>
    render() {

        return (
            <div className="container">
                <div>
                    <div className="card text-left w-25">
                        <img className="card-img-top" src="https://picsum.photos/400/400" alt />
                        <div className="card-body">
                            <h4 className="card-title">Title</h4>
                            <p className="card-text">Body</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
