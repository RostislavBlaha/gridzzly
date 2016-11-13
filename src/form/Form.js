import React, { Component } from 'react'
import { shadows, radius } from '../Styles'
import Wrapper from './Wrapper'

export default class Form extends Component{
    constructor(props) {
        super(props)
        this.state = {colourValue: 0}
        
    }
    
    changeColour(value, colour){
        this.props.changeColour(colour)
        this.setState({ colourValue:value})
    }
 
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
                        staffNr={this.props.staffNr}
                        changeStaffNr={this.props.changeStaffNr}
						colour={this.props.colour}
						changeColour={this.props.changeColour}
						value={this.props.colourValue}
						print={this.props.print}/>
        </div>
	   )
  }
}
