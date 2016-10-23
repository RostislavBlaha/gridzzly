import React, { Component } from 'react'

export default class Slider extends Component{
    handleChange(evt){
        this.props.changeValue(Number(evt.target.value))
    }

  render() {
    const sx = {
	  }
	
	const sliderStyle = {
		backgroundColor: "transparent",
		WebkitAppearance: "none",
    	MozAppearance: "none",
	}

    return (
        <div style={sx}>
            <input  style={sliderStyle}
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
