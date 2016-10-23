import React, { Component } from 'react'

const logo = require('./Logo.svg')


export default class Header extends Component{
  render() {
	  const sx = {
        width: "100%",
        display: "flex",
        flexDirection: "row",
		justifyContent: "space-between",
		color: "#483737",
		font: "bold 16px helvetica, arial, sans-serif",
		paddingBottom: "20px"
	  }

	  const claim={alignSelf: "center"}

	  const italic={fontStyle: "italic"}

    return (
        <div style={sx}>
			<img src={logo} alt="Logo"/>
			<div style={claim}>
			Make your own grid paper with<span style={italic}> Gridzzly</span>
			</div>
        </div>
	   )
  }
}
