import React, { Component } from 'react'
import { silver } from '../../Styles'

const types = { fourDots : require('./four-dots.svg'),
                threeDots : require('./three-dots.svg'),
                triangle : require('./triangle.svg'),
                rectangle : require('./rectangle.svg'),
                hexagon : require('./hexagon.svg'),
                note : require('./note.svg'),
                lines : require('./lines.svg')}

export default class TypeOption extends Component{
		constructor(props){
        super(props)
        this.state = {hover: false }
    }
	
  	handleClick(){
    	this.props.changeType(this.props.type)
  	}	
	
  	mouseOver(){
        this.setState({hover:true})
    }
	
	mouseOut(){
        this.setState({hover:false})
    }

  render() {
	  const sx = {	width: "40px",
        			height: "60px",
				  	background: "url(" + types[this.props.type] + ") no-repeat center",
        			cursor: "pointer",
					opacity: this.props.selected || this.state.hover ? "1" :" 0.8",
					display: "flex",
					justifyContent: "center",
					alignItems: "flex-end"}
	  
	  const cornerStyle = {	backgroundColor: "white",
							width: "10px",
							height: "10px",
							transform: "rotate(45deg)",
							display: "flex",
							marginBottom: "-5.5px",
							borderColor: silver,
							borderStyle: "solid none none solid",
							borderWidth: "1px"}
	  
	  const corner = this.props.selected ?  <div style={cornerStyle}></div> : ""
	  
    
    return (
        <div    style={sx}
                onClick={this.handleClick.bind(this)}
	  			onMouseOver={this.mouseOver.bind(this)} 
                onMouseOut={this.mouseOut.bind(this)}>
			{corner}
        </div>
	   )
  }
}
