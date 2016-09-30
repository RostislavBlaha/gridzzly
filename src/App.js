import React, { Component } from 'react'
import './App.css'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {grid:""}  
    }
    
    componentDidMount(){
        this.setState({grid: this.drawSquareGrid(5, 210, 297, "silver")})
    }
    
    printGrid(){
        window.print()
    }
    
    drawSquareGrid(distance, width, height, colour){
        var horizontalLength = Math.floor(width/distance)
        var verticalLength = Math.floor(height/distance)
        var size = "0.5mm"
        var grid = []

        var posX = distance
        var posY = distance
        
        for (let k = 0; k < verticalLength; k++) { 
            for (let i = 0; i < horizontalLength; i++) { 
                var c = <circle  key={grid.length}  cx={posX + "mm"} cy={posY + "mm"} r={size} fill={colour}/>
                    grid[grid.length] = c
                    posX += distance
            }
            console.log("radek")
            posX = distance
            posY += distance       
        }
        
        return grid
        
    }
    
  render() {
    var grid = this.state.grid
    return (
      <div className="App">
        <p className="App-intro">
            <svg width="210mm" height="290mm">
                {grid}
            </svg>
        </p>    
        <button onClick={this.printGrid.bind(this)}>
            Print
        </button>
      </div>
    )
  }
}

export default App