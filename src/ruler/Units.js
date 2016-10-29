import React, { Component } from 'react'

const cm = require('./cm.svg')
const inch = require('./in.svg')


export default class Units extends Component{
 
  render() {
	  const sx = {
        width: "100%",
        height: "25px",
        background: this.props.type==="mm" ? 'url(' + {cm}.cm + ') repeat-x' : 'url(' + {inch}.inch + ') repeat-x',
	  }
	  
    return (
	 	<div style={sx}>
		</div>
	)
  }
}