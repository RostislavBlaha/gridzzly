import React, { Component } from 'react'

export default class Label extends Component{
 
  render() {
	  const sx = {
        fontFamily: "arial",
        fontSize: "14px",
        height: "15px",
        marginLeft: "10px",
        marginRight: "10px",
        opacity: "0.5",
        display: "flex",
        flexDirection: this.props.labels==="right" ? "row-reverse" : "row",
        justifyContent: "space-between",
        transform: this.props.unit==="in" ? "rotateX(180deg)" : "",
        transitionDelay: "0.3s",
	  }
    console.log(this.props.unit)
    
    const unitType = this.props.type==="centimeters" ? "CENTIMETERS" : "INCHES"
    
    return (
        <div style={sx}>
            <span>{unitType}</span>
        </div>
	   )
  }
}