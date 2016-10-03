import React, { Component } from 'react'

export default class Label extends Component{
 
  render() {
    const rotate =  this.props.type==="inches" ? "transform: rotateY(180deg)" : ""
	  const sx = {
        fontFamily: "arial",
        fontSize: "14px",
        height: "15px",
        marginLeft: "10px",
        marginRight: "10px",
        opacity: "0.5",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
	  }
    


    
    
    const unitType = this.props.type==="centimeters" ? "CENTIMETERS" : "INCHES"
	  console.log(sx)
    return (
        <div style={sx}>
            <span style={rotate}></span> {rotate}.rotate">{unitType}</span>
            <span style={rotate}>{unitType}</span>
        </div>
	   )
  }
}