import React, { Component } from 'react'
import Grid from './Grid'

class App extends Component {
    
    printGrid(){
        window.print()
    }
    
    
  render() {
    return (
      <div className="App">  
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