import React, { Component } from 'react'
import Grid from './Grid'
import Ruler from './ruler/Ruler'
import Form from './form/Form'

class App extends Component {
    constructor(props) {
        super(props)
        try {
            var json = JSON.parse(localStorage["data"])
            var data = json.data
        } catch(err) {
            data = err
        }
        this.state = {  initialData: data,
                        data: { type: "squareDot",
                                distance: 5,
                                unit: "mm",
                                colour: "silver"
                                }}  
    }
    
    changeDistance(distance){
       var newData = this.state.data
       newData.distance = distance
       this.setState({data:newData})
       console.log(newData)
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
        <Form changeDistance={this.changeDistance.bind(this)}/>
        <Grid 	type={this.state.data.type}
                distance={this.state.data.distance}
                unit={this.state.data.unit}
                colour={this.state.data.colour}/>
      </div>
    )
  }
}

export default App