import React, { Component } from 'react'

export default class DistanceSlider extends Component{
    constructor(props) {
        super(props)
        this.state = { value: 5}
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(evt){
        var value = evt.target.value
        this.setState({value: value})
        this.props.changeDistance(value)
    }
 
  render() {
    return (
	 	<div>
        <input  min="5" 
                max="25" 
                type="range"
                value={this.state.value} 
                onChange={this.handleChange}/>      
		</div>
	)
  }
}