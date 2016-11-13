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
                        data: {type: "fourDots", distance: 5, unit: "mm", colour: "#d4d4d4", colourValue: 0, staffNr: 1},
                        print: false,
                        width: "100%",
                        height: "100%"}
    }
    
    componentDidMount(){
        const newData = (this.state.initialData==="err") ? {type: "fourDots", distance: 5, unit: "mm", colour: "#d4d4d4", staffNr: 1,} : this.state.initialData
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
  
    changeStaffNr(staffNr){
       var newData = this.state.data
       newData.staffNr = staffNr
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
       if (type==="note"){
         if (this.state.data.unit==="mm"){
           newData.distance = 15
         }else{
           newData.distance = 0.5625
         }
         
       }
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
                        staffNr={this.state.data.staffNr}
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
                    staffNr={this.state.data.staffNr}
                    changeStaffNr={this.changeStaffNr.bind(this)}
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
                    staffNr={this.state.data.staffNr}
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