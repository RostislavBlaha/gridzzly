import React, { Component } from 'react'

export default class TypeOption extends Component{

  render() {
    const unit = this.props.unit==="mm" ? "mm" : "in"
	  const sx = {
        cursor: "pointer"
	  }

    return (
        <div    style={sx}
                onClick={this.props.changeUnit}>
            {unit}
        </div>
	   )
  }
}
