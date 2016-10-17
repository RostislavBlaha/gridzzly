import React, { Component } from 'react'
import { shadows, radius } from '../Styles'
import Distance from './Distance'
import Colour from './Colour'

export default class Form extends Component{
    constructor(props) {
        super(props)
        this.state = {distance:"5",
                      colourValue: 0,
                      colour:"#B5B5B5"}
        
    }
    
    setDistance(distance){
        this.setState({distance:distance})
        this.props.changeDistance(distance)
    }
    
    changeDistance(distance){
        this.props.changeDistance(distance)
        this.setState({distance:distance})
    }
    
    changeColour(value, colour){
        this.props.changeColour(colour)
        this.setState({ colourValue:value,
                        colour:colour})
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
        boxShadow: shadows.bottom
	  }
    
    return (
        <div style={sx}>
          <Distance distance={this.state.distance}
                    changeDistance={this.changeDistance.bind(this)}/>
      <Colour   colour={this.state.colour}
                value={this.state.colourValue}
                changeColour={this.changeColour.bind(this)}/>
        </div>
	   )
  }
}