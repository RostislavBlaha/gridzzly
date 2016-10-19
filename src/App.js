import React, { Component } from 'react'
import Grid from './Grid'
import Ruler from './ruler/Ruler'
import Form from './form/Form'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {  data: { type: "fourDots",
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
    
    changeUnit(){
        var newData = this.state.data
        if (newData.unit==="mm"){
            newData.unit="in"
            newData.distance*=0.03937
        }else{
            newData.unit="mm"
            newData.distance/=0.03937
        }
        console.log("distance: " + newData.distance)
        this.setState({data:newData}) 
    }
    
    changeColour(colour){
       var newData = this.state.data
       newData.colour = colour
       this.setState({data:newData})
    }
    
    changeType(type){
       var newData = this.state.data
       newData.type = type
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
                changeUnit={this.changeUnit.bind(this)}
                changeColour={this.changeColour.bind(this)}
                changeType={this.changeType.bind(this)}
                distance={this.state.data.distance}
                unit={this.state.data.unit} 
                colour={this.state.data.colour}
                type={this.state.data.type}/>
        <Grid 	distance={this.state.data.distance}
                unit={this.state.data.unit}  
                colour={this.state.data.colour}
                type={this.state.data.type}/>
      </div>
    )
  }
}

export default App