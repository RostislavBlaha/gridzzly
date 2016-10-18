import React, { Component } from 'react'

const types = { fourDots : require('./four-dots.svg'),
                threeDots : require('./three-dots.svg'),
                triangle : require('./triangle.svg'),
                rectangle : require('./rectangle.svg'),
                hexagon : require('./hexagon.svg'),
                note : require('./note.svg')}

export default class TypeOption extends Component{
 
  render() {
    console.log(window[this.props.type])
	  const sx = {
        width: "40px",
        height: "40px",
        background: "url(" + types[this.props.type] + ") no-repeat center",
        cursor: "pointer",
        border: "1px solid silver"
	  }
    
    return (
        <div style={sx}>
        </div>
	   )
  }
}