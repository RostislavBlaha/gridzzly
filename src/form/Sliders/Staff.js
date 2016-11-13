import React, { Component } from 'react'
import Slider from './Slider'
import StaffNrInput from './StaffNrInput'

export default class Colour extends Component{
    handleChange(StaffNr){
        this.props.changeStaffNr(StaffNr)
    }

  render() {
	  const sx = {
        width: "100%",
        display: "flex",
		justifyContent: "space-between",
        flexDirection: "row",
        paddingTop: "18px",
	  }

    return (
        <div style={sx}>
          <Slider         value={this.props.staffNr}
                          changeValue={this.handleChange.bind(this)}
                          minValue="1"
                          maxValue="9"
                          step="1"/>
          <StaffNrInput   staffNr={this.props.staffNr}
                          changeStaffNr={this.handleChange.bind(this)}/>
        </div>
	   )
  }
}
