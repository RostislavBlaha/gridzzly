import React, { Component } from 'react'
import {largeFont, brown, yellow, radius, shadows} from "../Styles"

export default class Print extends Component{
	constructor(props){
        super(props)
        this.state = {hover: false }
    }
	
	mouseOver(){
        this.setState({hover:true})
    }
	
	mouseOut(){
        this.setState({hover:false})
    }

  render() {
    const sx={	color: brown,
				font: largeFont,
				borderRadius: radius,
				backgroundColor: yellow,
			 	padding: "15px 20px",
			  	cursor: "pointer",
			 	boxShadow: this.state.hover ? shadows.bottom : "none"}
    return (
		<div 	style={sx}
				onClick={this.props.print}
				onMouseOver={this.mouseOver.bind(this)} 
                onMouseOut={this.mouseOut.bind(this)}>
			PRINT
		</div>
	)
  }
}
