import React, { Component } from 'react'
import { shadows, radius } from '../Styles'
import Distance from './Distance'
import Colour from './Colour'
import Type from './Type/Type'

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
        boxShadow: shadows.bottom,
        flexDirection: "column"
	  }
    
    return (
        <div style={sx}>
            <Type   type={this.props.type}
                    changeType={this.props.changeType}/>
            <Distance   distance={this.props.distance}
                        unit={this.props.unit} 
                        changeDistance={this.props.changeDistance}
                        changeUnit={this.props.changeUnit}/>
            <Colour     colour={this.props.colour}
                        value={this.state.colourValue}
                        changeColour={this.changeColour.bind(this)}/>
        </div>
	   )
  }
}