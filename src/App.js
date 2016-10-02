import React, { Component } from 'react'
import Grid from './Grid'
import Ruler from './Ruler'

class App extends Component {
    
    printGrid(){
        window.print()
    }
    
    
  render() {
    return (
      <div className="App">
		<Ruler/>
		<Grid 	width=""
				height=""
				distance=""
				colour=""/>
        <button onClick={this.printGrid.bind(this)}>
            Print
        </button>
      </div>
    )
  }
}

export default App