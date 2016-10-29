import React, { Component } from 'react'
import { shadows, radius } from '../Styles'
import Wrapper from './Wrapper'

export default class Form extends Component{
  render() {
	  const sx = {
        width: window.innerWidth < 480 ? "100%" :"480px",
        backgroundColor: "white",
        zIndex: "5",
        borderBottomRightRadius: radius,
        borderBottomLeftRadius: radius, 
        display: "flex",
        boxShadow: shadows.bottom,
        flexDirection: "column"
	  }
    
    return (
        <div style={sx}>
            <Wrapper	type={this.props.type}
						changeType={this.props.changeType}
						distance={this.props.distance}
						changeDistance={this.props.changeDistance}
						unit={this.props.unit}
						changeUnit={this.props.changeUnit}
						colour={this.props.colour}
						changeColour={this.props.changeColour}
						value={this.props.colourValue}
						print={this.props.print}/>
        </div>
	   )
  }
}
