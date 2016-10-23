import React, { Component } from 'react'
import Distance from './Distance'
import Colour from './Colour'
import {silver, radius } from '../../Styles'

export default class Wrapper extends Component{

  render() {
    const sx={
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		height: "96px",
		padding: "18px",
		border: "1px solid " + silver,
		borderRadius: radius,
		marginBottom: "30px"
	}
    return (
		<div style={sx}>
            <Distance   distance={this.props.distance}
                        unit={this.props.unit}
                        changeDistance={this.props.changeDistance}
                        changeUnit={this.props.changeUnit}/>
            <Colour     colour={this.props.colour}
                        changeColour={this.props.changeColour}
						value={this.props.value}/>
		</div>
	)
  }
}
