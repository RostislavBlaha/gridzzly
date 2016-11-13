import React, { Component } from 'react'
import TypeOption from './TypeOption'


export default class Type extends Component{
  render() {
	  const sx = {
        width: "100%",
        display: "flex",
        flexDirection: "row",
		justifyContent:"space-around",
	  }
    
    return (
        <div style={sx}>
            <TypeOption type="fourDots" 
                        selected={this.props.type==="fourDots" ? true : false} 
                        changeType={this.props.changeType}/>
            <TypeOption type="threeDots" 
                        selected={this.props.type==="threeDots" ? true : false} 
                        changeType={this.props.changeType}/>
            <TypeOption type="lines" 
                        selected={this.props.type==="lines" ? true : false} 
                        changeType={this.props.changeType}/>
            <TypeOption type="rectangle" 
                        selected={this.props.type==="rectangle" ? true : false} 
                        changeType={this.props.changeType}/>
		    <TypeOption type="triangle" 
                        selected={this.props.type==="triangle" ? true : false} 
                        changeType={this.props.changeType}/>
            <TypeOption type="hexagon" 
                        selected={this.props.type==="hexagon" ? true : false} 
                        changeType={this.props.changeType}/>
            <TypeOption type="note" 
                        selected={this.props.type==="note" ? true : false} 
                        changeType={this.props.changeType}/>
        </div>
	   )
  }
}
