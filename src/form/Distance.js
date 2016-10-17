import React, { Component } from 'react'
import Slider from './Slider'
import Input from './Input'

export default class Distance extends Component{
    handleChange(distance){
        this.props.changeDistance(distance)
        console.log(this.props.distance)
    }
 
  render() {
	  const sx = {
	  }
    
    return (
        <div style={sx}>
          <Slider   value={this.props.distance} 
                    changeValue={this.handleChange.bind(this)}
                    minValue="5"
                    maxValue="25"/>
          <Input    value={this.props.distance}
                    defaultValue="5"
                    changeValue={this.handleChange.bind(this)}/>
        </div>
	   )
  }
}