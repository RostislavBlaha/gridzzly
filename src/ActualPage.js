import React, { Component } from 'react'


export default class ActualPage extends Component{
  componentDidMount(){
      window.print()
  }
  componentDidUpdate(){
      window.print()
  }
  render() {
    const width = this.props.unit==="mm" ? 210 : 8.5
    const height = this.props.unit==="mm" ? 297 : 11
    console.log(<svg width={width + this.props.unit} height={height + this.props.unit}  xmlns="http://www.w3.org/2000/svg"></svg>)
    return (
        
        <div>
            <svg width={width + this.props.unit} height={height + this.props.unit}  xmlns="http://www.w3.org/2000/svg">
            
            </svg>
        </div>
	   )
  }
}
