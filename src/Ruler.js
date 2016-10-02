import React, { Component } from 'react'
import Units from './Units'

export default class Ruler extends Component{

 
  render() {
	  const sx = {
		width: "100%",
		height: "100px",
		backgroundColor: "#ffd633",
		display: "flex",
		flexDirection: "column"
	  }
    return (
	 	<div style={sx}>
			<Units type="in"/>
			<Units type="cm"/>
		</div>
	)
  }
}