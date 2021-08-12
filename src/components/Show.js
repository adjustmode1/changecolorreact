import React, { Component } from 'react'

class Show extends Component {
    showstyle = ()=>{
        return {
            border:'1px solid '+this.props.pick,
            fontSize: this.props.size+'px'
        };
    }
    render() {
        return (
            <div className="show">
                <p>color: {this.props.pick} - Fontsize: {this.props.size}px</p>
                <div style={this.showstyle()} >Nội dung text</div>
            </div>
        )
    }
}

export default Show
