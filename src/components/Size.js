import React, { Component } from 'react'

class Size extends Component {
    inc = ()=>{
        this.props.inc(this.props.size+2);
    }
    dec = ()=>{
        this.props.dec((this.props.size-2<6)? 6:this.props.size-2);
    }
    render() {
        return (
            <div className="size">
                {this.props.size} pixel
                <button onClick={this.inc}>tăng</button>
                <button onClick={this.dec}>giảm</button>
            </div>
        )
    }
}

export default Size
