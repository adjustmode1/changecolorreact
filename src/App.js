import './App.css';
import Color from './components/Color';
import Size from './components/Size';
import Show from './components/Show';

import React, { Component } from 'react'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      pick:'red',
      size:12
    }
  }
  reset = () =>{
    this.setState({
      pick:'red',
      size:12
    });
  }
  inc = (param)=>{
    this.setState({
      size: param
    });
  }
  dec = (param)=>{
    this.setState({
      size: param
    });
  }
  changeColor = (param)=>{
    this.setState ({
      pick:param
    });
  }
  render() {
    return (
      <div className="App">
        <Color pick={this.state.pick} changeColor={this.changeColor}/>
        <Size size={this.state.size}  inc={this.inc} dec={this.dec}/>
        <button onClick={this.reset}>reset</button>
        <Show size={this.state.size} pick={this.state.pick}/>
      </div>
    )
  }
}

export default App;