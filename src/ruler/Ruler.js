import React, { Component } from 'react'
import Units from './Units'
import Labels from "./Labels"
import { yellow, shadows } from '../Styles'

export default class Ruler extends Component{
 
  render() {
	  const sx = {
        width: "100%",
        height: "100px",
        backgroundColor: yellow,
        display: (window.innerWidth < 750 && this.props.labels!=="right") || (window.innerWidth < 600 && this.props.labels==="right") ? "none" : "flex",
        flexDirection: "column",
        boxShadow: this.props.unit==="in" ? shadows.top : shadows.bottom,
        transform: this.props.unit==="in" ? "rotateX(180deg)" : "",
        perspective: "10px",
        animationTimingFunction: "ease-in-out",
        transition: "0.6s",
	      transformStyle: "preserve-3d",
        cursor: "pointer",
        zIndex: "1"
	  }
    
    return (
	 	<div style={sx}
         onClick={this.props.changeUnit}>
			<Units type="in"/>
      <Labels unit={this.props.unit}
              labels={this.props.labels}/>
			<Units type="mm"/>
		</div>
	)
  }
}
