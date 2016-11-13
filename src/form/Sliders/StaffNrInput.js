import React, { Component } from 'react'
import Multiply from './Multiply'
import {silver, brown, radius, font } from '../../Styles'

export default class Input extends Component{
    handleChange(evt){
        this.props.changeStaffNr(evt.target.value)
    }

  render() {
	  const sx = {
		  border: "1px solid " + silver,
		  borderRadius: radius,
		  width: "110px",
		  height: "36px",
		  display: "flex",
		  alignItems: "center",
		  overflow: "hidden"
	  }
	  const inputStyle = {
		  width: "60px",
		  height: "26px",
		  textAlign: "right",
		  border: "none",
		  font: font,
          fontWeight: "bold",
		  color: brown,
		  display: "flex",
		  
	  }

    return (
        <div style={sx}>
            <input  style={inputStyle}
					type="text"
                    value={this.props.staffNr}
                    onChange={this.handleChange.bind(this)}/>
			<Multiply/>

        </div>
	   )
  }
}
