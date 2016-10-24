import React, { Component } from 'react'
import Grid from './Grid'
import Ruler from './ruler/Ruler'
import Form from './form/Form'
import ActualPage from './ActualPage'

class App extends Component {
    constructor(props){
        super(props)
        try {
            var data = JSON.parse(localStorage["data_gridzzly"])
        } catch(err) {
            data = err
        }
        this.state = {  initialData: data,
                        data: {type: "fourDots", distance: 5, unit: "mm", colour: "#B5B5B5"},
                        print: false}
    }
    
    componentDidMount(){
        const newData = this.state.initialData ? this.state.initialData : {type: "fourDots", distance: 5, unit: "mm", colour: "#B5B5B5"}
        this.setState({data:newData})  
    }
    
   saveData(data){
       this.setState({print: false})
       var newData = data
       this.setState({data:newData}) 
       localStorage["data_gridzzly"] = JSON.stringify(newData)
   }   
    
    changeDistance(distance){
       var newData = this.state.data
       newData.distance = distance
       this.saveData(newData)    
    }
    
    changeUnit(){
        var newData = this.state.data
        if (newData.unit==="mm"){
            newData.unit="in"
            newData.distance=Math.round(newData.distance * 393.7)/10000
        }else{
            newData.unit="mm"
            newData.distance= Math.round(newData.distance / 0.03937)
        }
        this.saveData(newData) 
    }
    
    changeColour(colour){
       var newData = this.state.data
       newData.colour = colour
       this.saveData(newData)
    }
    
    changeType(type){
       var newData = this.state.data
       newData.type = type
       this.saveData(newData) 
       
    }
    
    print(){
        this.setState({print: true})
    }
    
    
   render() {
    const sx = {
        display: "flex",
        flexDirection: "column",
	  }
    
    const print = {
        display: "none"
	  }
    
    const actualPage = this.state.print ? 
        <ActualPage     distance={this.state.data.distance}
                        unit={this.state.data.unit}  
                        colour={this.state.data.colour}
                        type={this.state.data.type}
                        print={this.state.print}/>
     : ""
    
    return (
      <div>
          <div  className="App"
                style={sx}>
            <Ruler 	unit={this.state.data.unit}
                    changeUnit={this.changeUnit.bind(this)}/>
            <Form   changeDistance={this.changeDistance.bind(this)}
                    changeUnit={this.changeUnit.bind(this)}
                    changeColour={this.changeColour.bind(this)}
                    changeType={this.changeType.bind(this)}
                    distance={this.state.data.distance}
                    unit={this.state.data.unit} 
                    colour={this.state.data.colour}
                    type={this.state.data.type}
                    print={this.print.bind(this)}/>
            <Grid 	distance={this.state.data.distance}
                    unit={this.state.data.unit}  
                    colour={this.state.data.colour}
                    type={this.state.data.type}/>
          </div>
          <div  className="Print" style={print}>
            {actualPage}
          </div>
      </div>
    )
  }
}

export default App