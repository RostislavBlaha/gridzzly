import React, { Component } from 'react'
import Grid from './Grid'
import Ruler from './ruler/Ruler'
import Form from './form/Form'
import ActualPage from './ActualPage'
import Signature from './Signature'

class App extends Component {
    constructor(props){
        super(props)
        try {
            var data = JSON.parse(localStorage["data_gridzzly"])
        } catch(err) {
            data = "err"
        }
        this.state = {  initialData: data,
                        data: {type: "fourDots", distance: 5, unit: "mm", colour: "#B5B5B5", colourValue: 0},
                        print: false,
                        width: "100%",
                        height: "100%"}
    }
    
     updateDimensions() {
        //var body = this.refs.App
        //var width = window.innerWidth || document.documentElement.clientWidth || body.clientWidth
        //var height = window.innerHeight || document.documentElement.clientHeight || body.clientHeight
        //this.setState({width:width, height:height})
    }
    
    componentWillMount(){
        //this.updateDimensions() 
    }
    
    componentDidMount(){
        const newData = (this.state.initialData==="err") ? {type: "fourDots", distance: 5, unit: "mm", colour: "#B5B5B5"} : this.state.initialData
        this.setState({data:newData})
        //window.addEventListener("resize", this.updateDimensions.bind(this), true)
    }
    
    componentWillUnmount() {
        //window.removeEventListener("resize", this.updateDimensions.bind(this), false)
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
    
    changeColour(value, colour){
       var newData = this.state.data
	   newData.colourValue = value
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
        width: window.innerWidth,
        display: "flex",
        flexDirection: "row",
        justifyItems: "space-between"
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
				ref="App"
                style={sx}>
            <Ruler 	unit={this.state.data.unit}
                    changeUnit={this.changeUnit.bind(this)}
                    labels="left"/>
            <Form   changeDistance={this.changeDistance.bind(this)}
                    changeUnit={this.changeUnit.bind(this)}
                    changeColour={this.changeColour.bind(this)}
					colourValue={this.state.data.colourValue}
                    changeType={this.changeType.bind(this)}
                    distance={this.state.data.distance}
                    unit={this.state.data.unit} 
                    colour={this.state.data.colour}
                    type={this.state.data.type}
                    print={this.print.bind(this)}/>
            <Ruler 	unit={this.state.data.unit}
                    changeUnit={this.changeUnit.bind(this)}
                    labels="right"/>
            <Grid 	distance={this.state.data.distance}
                    unit={this.state.data.unit}  
                    colour={this.state.data.colour}
                    type={this.state.data.type}
                    height={this.state.height}/>
             <Signature/>
          </div>
          <div  className="Print" style={print}>
            {actualPage}
          </div>
      </div>
    )
  }
}

export default App