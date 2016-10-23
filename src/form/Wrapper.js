import React, { Component } from 'react'
import Type from './Type/Type'
import Header from './Header'
import Sliders from './Sliders/Sliders'

export default class Wrapper extends Component{

  render() {
    const sx={
	padding: "30px 48px 48px 48px",
	display: "flex",
    flexDirection: "column",
	}
    return (
		<div style={sx}>
			<Header/>
		    <Type   	type={this.props.type}
                    	changeType={this.props.changeType}/>
			<Sliders	distance={this.props.distance}
                        unit={this.props.unit}
                        changeDistance={this.props.changeDistance}
                        changeUnit={this.props.changeUnit}
						colour={this.props.colour}
                        changeColour={this.props.changeColour}
						value={this.props.value}/>
		</div>
	)
  }
}
