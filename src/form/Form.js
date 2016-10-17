import React, { Component } from 'react'
import { shadows, radius } from '../Styles'
import Slider from './Slider'
import Input from './Input'

export default class Form extends Component{
    constructor(props) {
        super(props)
        this.state = {distance:"5"}
        
    }
    
    setDistance(distance){
        this.setState({distance:distance})
        this.props.changeDistance(distance)
    }
    
    changeDistance(distance){
        this.props.changeDistance(distance)
        this.setState({distance:distance})
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
      <Slider   value={this.state.distance} 
                changeValue={this.changeDistance.bind(this)}
                minValue="5"
                maxValue="25"/>
      <Input    value={this.state.distance}
                defaultValue="5"
                changeValue={this.changeDistance.bind(this)}/>
        </div>
	   )
  }
}