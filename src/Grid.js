import React, { Component } from 'react'

export default class Grid extends Component{
    constructor(props) {
        super(props)
        this.state = {grid:""}  
    }
	
	componentDidMount(){
        this.setState({grid: this.drawSquareGrid(20, window.innerWidth, window.innerHeight, "silver")})
    }
	
	drawSquareGrid(distance, width, height, colour){
        var horizontalLength = Math.floor(width/distance)
        var verticalLength = Math.floor(height/distance)
        var size = 0.3
        var grid = []

        var posX = size
        var posY = size
        
        for (let k = 0; k < verticalLength+1; k++) { 
            for (let i = 0; i < horizontalLength+1; i++) { 
                var c = <circle  key={grid.length}  cx={posX} cy={posY} r={size + "mm"} fill={colour}/>
                    grid[grid.length] = c
                    posX += (distance-size)
            }
            posX = size
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
