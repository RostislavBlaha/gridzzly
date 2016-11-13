import React, { Component } from 'react'
import Type from './Type/Type'
import Header from './Header'
import Sliders from './Sliders/Sliders'
import Print from './Print'

export default class Wrapper extends Component{

  render() {
    const sx={	padding: window.innerWidth < 480 ? "20px" : "30px 48px 48px 48px",
				display: "flex",
    			flexDirection: "column",
			  	alignItems: "center",}

    return (
		<div style={sx}>
			<Header/>
		    <Type     type={this.props.type}
                      changeType={this.props.changeType}/>
			<Sliders  type={this.props.type}
                      distance={this.props.distance}
                      unit={this.props.unit}
                      changeDistance={this.props.changeDistance}
                      changeUnit={this.props.changeUnit}
                      staffNr={this.props.staffNr}
                      changeStaffNr={this.props.changeStaffNr}
                      colour={this.props.colour}
                      changeColour={this.props.changeColour}
					  value={this.props.value}/>
			<Print	  print={this.props.print}/>
		</div>
	)
  }
}
