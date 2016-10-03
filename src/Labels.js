import React, { Component } from 'react'
import Label from './Label'

export default class Units extends Component{
 
  render() {
    //const imgURL =  ? {cm} : {inch}
	  const sx = {
		width: "100%",
		height: "50px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  }
	  
    return (
	 	<div style={sx}>
        <Label type="inches"/>
        <Label type="centimeters"/>
		</div>
	   )
  }
}