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
        marginTop: "-100px",
        display: "flex",
        alignSelf: "center",
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
						changeColour={this.changeColour.bind(this)}
						value={this.state.colourValue}
						print={this.props.print}/>
        </div>
	   )
  }
}
