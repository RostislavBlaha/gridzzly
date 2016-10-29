import React, { Component } from 'react'
import {silver, radius} from '../../Styles'

export default class ColourBox extends Component{

  render() {
	  const sx = {
        backgroundColor: this.props.colour,
		width: "110px",
		height: "36px",
		border: "1px solid " + silver,
		borderRadius: radius,
	  }

    return (
        <div style={sx}></div>
	   )
  }
}
