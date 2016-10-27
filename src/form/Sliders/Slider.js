import React, { Component } from 'react'

export default class Slider extends Component{
    handleChange(evt){
        this.props.changeValue(Number(evt.target.value))
    }

  render() {
    const sx = {
		display: "flex",
		alignItems: "center"
	  }
	
	const sliderStyle = {
		backgroundColor: "transparent",
		width: window.innerWidth < 480 ? "100%" : "225px",
	}

    return (
        <div 	style={sx}
				className="slider">
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
