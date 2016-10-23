import React, { Component } from 'react'

const types = { fourDots : require('./four-dots.svg'),
                threeDots : require('./three-dots.svg'),
                triangle : require('./triangle.svg'),
                rectangle : require('./rectangle.svg'),
                hexagon : require('./hexagon.svg'),
                note : require('./note.svg'),
                lines : require('./lines.svg')}

export default class TypeOption extends Component{
  handleClick(){
    this.props.changeType(this.props.type)
  }

  render() {
	  const sx = {
        width: "40px",
        height: "60px",
        background: "url(" + types[this.props.type] + ") no-repeat center",
        backgroundColor: this.props.selected ? "silver" : "",
        cursor: "pointer",
	  }
    
    return (
        <div    style={sx}
                onClick={this.handleClick.bind(this)}>
        </div>
	   )
  }
}
