import React, { Component } from 'react'

export default class Grid extends Component{
    constructor(props) {
        super(props)
        this.state = {grid:""}
        
    }
	
    componentDidMount(){
        this.drawSquareDotGrid(this.props.distance, this.props.unit, this.props.colour)
    }
    
    componentWillReceiveProps(nextProps) {
    this.drawSquareDotGrid(nextProps.distance, nextProps.unit, nextProps.colour)
    }
    
    drawSquareDotGrid(distance, unit, colour){ 
        var prefix = "data:image/svg+xml;charset=UTF-8,"
        var grid = "<svg width=\""+distance+unit+"\" height=\""+distance+unit+"\" viewPort=\"0 0 5mm 5mm\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"4mm\" cy=\"4mm\" r=\"0.3mm\" fill=\""+colour+ "\"/></svg>"
        var newGrid = prefix + window.encodeURIComponent(grid)
        this.setState({grid: newGrid })
    }
    
    
	
 
  render() {
    console.log(this.state.grid)
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight - 105
    const sx = {width: "100%",
                height: windowHeight,
                backgroundImage: 'url('+ this.state.grid +')'}

    return (
	 	<div style={sx}>
			<svg width={windowWidth} height={windowHeight}>
			</svg>
		</div>
	)
  }
}
