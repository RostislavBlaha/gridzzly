import React, { Component } from 'react'
import TypeOption from './TypeOption'


export default class Type extends Component{
 
  render() {
	  const sx = {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        paddingTop: "30px",
        paddingLeft: "30px"
	  }
    
    return (
        <div style={sx}>
            <TypeOption type="fourDots"/>
            <TypeOption type="threeDots"/>
            <TypeOption type="triangle"/>
            <TypeOption type="rectangle"/>
            <TypeOption type="hexagon"/>
            <TypeOption type="note"/>
        </div>
	   )
  }
}