import React, { Component } from 'react'
import {smallFont, brown} from '../Styles'

export default class Label extends Component{
 
  render() {
	  const sx = {
        font: smallFont,
        color: brown,
        height: "15px",
        marginLeft: "10px",
        marginRight: "10px",
        opacity: "0.6",
        display: "flex",
        flexDirection: this.props.labels==="right" ? "row-reverse" : "row",
        justifyContent: "space-between",
        transform: this.props.unit==="in" ? "rotateX(180deg)" : "",
        transitionDelay: "0.3s",
	  }
    
    const unitType = this.props.type==="mm" ? "MILIMETRES" : "INCHES"
    
    return (
        <div style={sx}>
            <span>{unitType}</span>
        </div>
	   )
  }
}