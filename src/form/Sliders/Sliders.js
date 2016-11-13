import React, { Component } from 'react'
import Distance from './Distance'
import Colour from './Colour'
import Staff from './Staff'
import {silver, radius } from '../../Styles'

export default class Wrapper extends Component{

  render() {
    const sx={
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		//height: "96px",
		padding: "18px",
		border: "1px solid " + silver,
		borderRadius: radius,
		marginBottom: window.innerWidth < 480 ? "20px" : "30px",
		width: window.innerWidth < 480 ? "90%" : "350px"
	}

    const numberOfStaffs = this.props.type==="note" ? 
          <Staff changeStaffNr={this.props.changeStaffNr}
                 staffNr={this.props.staffNr} />
          : ""
    return (
		<div style={sx}>
            <Distance   type={this.props.type}
                        distance={this.props.distance}
                        unit={this.props.unit}
                        changeDistance={this.props.changeDistance}
                        changeUnit={this.props.changeUnit}/>
            {numberOfStaffs}
            <Colour     colour={this.props.colour}
                        changeColour={this.props.changeColour}
						value={this.props.value}/>
            
		</div>
	)
  }
}
