import React, { Component } from 'react'
import Units from './Units'
import Labels from "./Labels"
import { colors, shadows } from '../Styles'

export default class Ruler extends Component{
  constructor(props) {
    super(props)
    this.state = {orientation:"cm"}
  }
    
    rotate(){
        this.setState({orientation: this.state.orientation==="cm" ? "in" : "cm"})
    }
 
  render() {
	  const sx = {
        width: "100%",
        height: "100px",
        backgroundColor: colors.yellow,
        display: "flex",
        flexDirection: "column",
        boxShadow: this.state.orientation==="in" ? shadows.top : shadows.bottom,
        transform: this.state.orientation==="in" ? "rotateX(180deg)" : "",
        perspective: "10px",
        animationTimingFunction: "ease-in-out",
        transition: "0.6s",
	      transformStyle: "preserve-3d",
        cursor: "pointer",
        zIndex: "1"
	  }
    
    return (
	 	<div style={sx}
         onClick={this.rotate.bind(this)}>
			<Units type="in"/>
            <Labels orientstion={this.state.orientation}/>
			<Units type="cm"/>
		</div>
	)
  }
}