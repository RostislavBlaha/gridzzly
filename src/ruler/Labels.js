import React, { Component } from 'react'
import Label from './Label'

export default class Units extends Component{
 
  render() {
    const sx = {
        width: "100%",
        height: "50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
    }
    return (
        <div style={sx}>
            <Label  labels={this.props.labels}
                    unit={this.props.unit}/>
            <Label  labels={this.props.labels}
                    unit={this.props.unit}
                    type="mm"/>
        </div>	     
	   )
  }
}