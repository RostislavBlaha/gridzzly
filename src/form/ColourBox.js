import React, { Component } from 'react'

export default class ColourBox extends Component{
 
  render() {
	  const sx = {
        width: "120px",
        height: "20px",
        backgroundColor: this.props.colour
	  }
    
    return (
        <div style={sx}></div>
	   )
  }
}