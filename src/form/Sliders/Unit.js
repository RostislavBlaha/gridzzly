import React, { Component } from 'react'
import {brown, font } from '../../Styles'

export default class TypeOption extends Component{

  render() {
    const unit = this.props.unit==="mm" ? "mm" : "in"
	  const sx = {
        cursor: "pointer",
		font: font,
        fontWeight: "bold",
		color: brown,
		opacity: "0.8",
		paddingLeft: "5px",
		width: "40px"
	  }

    return (
        <div    style={sx}
                onClick={this.props.changeUnit}>
            {unit}
        </div>
	   )
  }
}
