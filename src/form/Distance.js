import React, { Component } from 'react'
import Slider from './Slider'
import Input from './Input'
import Unit from './Unit'

export default class Distance extends Component{
 
  render() {
	  const sx = {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        paddingTop: "30px",
        paddingLeft: "30px"
	  }
    
    return (
        <div style={sx}>
          <Slider   value={this.props.distance} 
                    changeValue={this.props.changeDistance}
                    minValue="5"
                    maxValue="20"/>
          <Input    value={this.props.distance}
                    defaultValue="5"
                    changeValue={this.props.changeDistance}/>
          <Unit     unit={this.props.unit}
                    changeUnit={this.props.changeUnit}/>
        </div>
	   )
  }
}