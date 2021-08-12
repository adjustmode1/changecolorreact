import React, { Component } from 'react';

class Color extends Component {
    constructor(props){
        super(props);
        this.state = {
            color:['red','green','blue','gray']
        }
    }
    stylecolor(color){
        return {
            'backgroundColor':color
        }
    }
    changeColor = (color)=>{
        this.props.changeColor(color);
    }
    render() {
        var colors = this.state.color.map((elm,index)=>{
            var block = 'block';
            if(elm === this.props.pick)
                block += ' active';
            return <div 
                    key={index} 
                    className={block} 
                    style={this.stylecolor(elm)}
                    onClick={()=>{this.changeColor(elm)}}
                    >

                    </div>
        }); 
        return (
            <div className="colorpicker">
                {colors}
            </div>
        )
    }
}

export default Color;
