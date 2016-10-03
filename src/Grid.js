import React, { Component } from 'react'

export default class Grid extends Component{
    constructor(props) {
        super(props)
        this.state = {grid:""}  
    }
	
	componentDidMount(){
        this.setState({grid: this.drawSquareGrid(5, 210, 297, "silver")})
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
                var c = <circle  key={grid.length}  cx={posX + "mm"} cy={posY + "mm"} r={size + "mm"} fill={colour}/>
                    grid[grid.length] = c
                    posX += (distance-size)
            }
            posX = size
            posY += distance       
        }
        
        return grid
        
    }
 
  render() {
  	var grid = this.state.grid
    return (
	 	<div>
			<svg width="210mm" height="290mm">
					{grid}
			</svg>
		</div>
	)
  }
}
