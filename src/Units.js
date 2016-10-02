import React, { Component } from 'react'

export default class Units extends Component{
 
  render() {
	  const sx = {
		width: "100%",
		height: "25px",
		background: this.props.type==="cm" ? "url(./cm.png) repeat-x" : "url(./in.svg) repeat-x"
		
	  }
	  
    return (
	 	<div style={sx}>
		</div>
	)
  }
}