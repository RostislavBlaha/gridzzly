import React, { Component } from 'react'
import { shadows, radius } from '../Styles'
import DistanceSlider from './DistanceSlider'

export default class Form extends Component{
 
  render() {
	  const sx = {
        width: "480px",
        height: "400px",
        backgroundColor: "white",
        zIndex: "2",
        borderBottomRightRadius: radius,
        borderBottomLeftRadius: radius, 
        position: "absolute",
        top: "0",
        display: "flex",
        alignSelf: "center",
        boxShadow: shadows.bottom
	  }
    
    return (
        <div style={sx}>
            <DistanceSlider changeDistance={this.props.changeDistance}/>
        </div>
	   )
  }
}