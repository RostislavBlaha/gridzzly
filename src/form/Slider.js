import React, { Component } from 'react'

export default class Slider extends Component{    
    handleChange(evt){
        this.props.changeValue(Number(evt.target.value))
    }
 
  render() {
    const sx = {
	  }
    
    return (
        <div>
            <input  style={sx}
                    min={this.props.minValue} 
                    max={this.props.maxValue} 
                    type="range"
                    value={this.props.value}
					step={this.props.step}
                    onChange={this.handleChange.bind(this)}/>      
        </div>
	)
  }
}