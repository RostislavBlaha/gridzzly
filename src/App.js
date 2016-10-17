import React, { Component } from 'react'
import Grid from './Grid'
import Ruler from './ruler/Ruler'
import Form from './form/Form'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {  data: { type: "squareDot",
                                distance: 5,
                                unit: "mm",
                                colour: "#B5B5B5"}
                     }
    }
    
    changeDistance(distance){
       var newData = this.state.data
       newData.distance = distance
       this.setState({data:newData})
       
    }
    
    changeColour(colour){
       var newData = this.state.data
       newData.colour = colour
       this.setState({data:newData})
    }
    
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
        <Form   changeDistance={this.changeDistance.bind(this)}
                changeColour={this.changeColour.bind(this)}/>
        <Grid 	type={this.state.data.type}
                distance={this.state.data.distance}
                unit={this.state.data.unit}
                colour={this.state.data.colour}/>
      </div>
    )
  }
}

export default App