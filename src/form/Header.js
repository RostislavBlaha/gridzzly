import React, { Component } from 'react'
import {font, brown} from "../Styles"

const logo = require('./Logo.svg')


export default class Header extends Component{
  render() {
	  const sx = {
        width: "100%",
        display: "flex",
        flexDirection: "row",
		    justifyContent: "space-between",
        color: brown,
        font: font,
        fontSize: window.innerWidth < 480 ? "14px" : "",
        paddingBottom: window.innerWidth < 480 ? "10px" :"20px"}

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
