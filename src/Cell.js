import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  onClick = (event) => {
    const newColor = this.props.selectedColor()
    this.setState({
      color: newColor
    })
  }
  
  render() {
    return (
      <div onClick={this.onClick} className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
  
}
