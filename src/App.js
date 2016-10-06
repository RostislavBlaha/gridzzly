import React, { Component } from 'react'
import Grid from './Grid'
import Ruler from './Ruler'
import Form from './Form'

class App extends Component {
    
    printGrid(){
        window.print()
    }
    
    
  render() {
    const sx = {
        display: "flex",
        flexDirection: "column",
	  }
    
    return (
      <div  className="App"
            style={sx}>
        <Ruler/>
        <Form/>
        <Grid 	distance={5}
                unit="cm"
                colour="silver"/>
      </div>
    )
  }
}

export default App