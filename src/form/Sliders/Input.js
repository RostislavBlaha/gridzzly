import React, { Component } from 'react'

export default class Input extends Component{
    handleChange(evt){
        this.props.changeValue(evt.target.value)
    }

  render() {
	  const sx = {
	  }

    return (
        <div>
            <input  style={sx}
                    type="text"
                    value={this.props.value}
                    onChange={this.handleChange.bind(this)}/>

        </div>
	   )
  }
}
