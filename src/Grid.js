import React, { Component } from 'react'

export default class Grid extends Component{
    constructor(props) {
        super(props)
        this.state = {grid:""}  
    }
	
	componentDidMount(){
        this.setState({grid: this.drawSquareGrid(this.props.distance, this.props.unit, this.props.colour)})
    }
	
	drawSquareGrid(distance, unit, colour){
        var horizontalLength = Math.floor(window.innerWidth/distance)
        var verticalLength = Math.floor(window.innerHeight/distance)
        var size = 0.3
        var grid = []

        var posX = 4.5
        var posY = 4.5
        
        for (let k = 0; k < verticalLength+1; k++) { 
            for (let i = 0; i < horizontalLength+1; i++) { 
                var c = <circle  key={grid.length}  cx={posX + "mm"} cy={posY + "mm"} r={size + "mm"} fill={colour}/>
                    grid[grid.length] = c
                    posX += distance
            }
            posX = 4.5
            posY += distance     
        }
        
        return grid
        
    }
 
  render() {
    const sx = {overflow: "hidden"}
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight - 105
  	var grid = this.state.grid
    return (
	 	<div style={sx}>
			<svg width={windowWidth} height={windowHeight}>
					{grid}
			</svg>
		</div>
	)
  }
}
