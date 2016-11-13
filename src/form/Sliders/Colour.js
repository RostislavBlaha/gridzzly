import React, { Component } from 'react'
import Slider from './Slider'
import ColourBox from './ColourBox'

export default class Colour extends Component{
    handleChange(value){
        var colour=this.mapColour(value)
        this.props.changeColour(value,colour)
    }

    mapColour(value){
        var increment = 212 - (value*2)
        var hexcrement = increment.toString(16)
        return "#" + hexcrement + hexcrement + hexcrement
    }

  render() {
	  const sx = {
        width: "100%",
        display: "flex",
		justifyContent: "space-between",
        flexDirection: "row",
        paddingTop: "18px",
	  }

    return (
        <div style={sx}>
          <Slider   value={this.props.value}
                    changeValue={this.handleChange.bind(this)}
                    minValue="0"
                    maxValue="50"/>
          <ColourBox colour={this.props.colour}/>
        </div>
	   )
  }
}
