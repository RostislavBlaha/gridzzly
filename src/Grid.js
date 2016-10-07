import React, { Component } from 'react'

export default class Grid extends Component{
    constructor(props) {
        super(props)
        this.state = {grid:""}  
    }
    
    shouldComponentUpdate(nextProps, nextState) {
      return this.state.grid !== nextState.grid
    }
	
	componentDidMount(){
        var newGrid = this.drawSquareGrid(this.props.distance, this.props.unit, this.props.colour)
        this.setState({grid: newGrid})
    }
    
componentWillReceiveProps(nextProps) {
        var newGrid = this.drawSquareGrid(nextProps.distance, nextProps.unit, nextProps.colour)
        this.setState({grid: newGrid})
}
	
	drawSquareGrid(distance, unit, colour){
        var horizontalLength = 100
        var verticalLength = 50
        var grid = []
        var posX = 4.5
        var posY = 4.5
        
        for (let k = 0; k < verticalLength; k++) { 
            for (let i = 0; i < horizontalLength; i++) { 
                var c = <circle  key={grid.length}  cx={posX + unit} cy={posY + unit} r={0.3 + unit} fill={colour}/>
                    grid[grid.length] = c
                    posX += distance
            }
            posX = 4.5
            posY += distance     
        }
        console.log("horizontalLength" + horizontalLength)
        console.log("verticalLength" + verticalLength)
        console.log(posX)
        console.log(posY    )
        return grid  
    }
 
  render() {
    console.log("vykresluju grid!")
    
    const sx = {/*overflow: "hidden"*/}
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
