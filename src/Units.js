import React, { Component } from 'react'

const cm = require('./cm.svg')
const inch = require('./in.svg')


export default class Units extends Component{
 
  render() {
    //const imgURL =  ? {cm} : {inch}
	  const sx = {
        width: "100%",
        height: "25px",
        background: this.props.type==="cm" ? 'url(' + {cm}.cm + ') repeat-x' : 'url(' + {inch}.inch + ') repeat-x'
	  }
	  
    return (
	 	<div style={sx}>
		</div>
	)
  }
}