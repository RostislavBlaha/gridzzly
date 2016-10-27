import React, { Component } from 'react'
import {brown, smallFont} from './Styles'

export default class Label extends Component{
 
  render() {

	  const sx = {
        color: brown,
        font: smallFont,
        position: "absolute",
        bottom: "20px",
        right: "20px",
	  }
    
    const ax = {
        color: brown,
        font: smallFont,
        fontWeight: "bold",
        textDecoration: "none"
	  }
    
    return (
        <div style={sx}>
            designed and developed by <a style={ax} href="rostislavblaha.cz">Rostislav Blaha</a> 
        </div>
	   )
  }
}