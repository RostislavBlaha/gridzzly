import React, { Component } from 'react'


export default class ActualPage extends Component{
    constructor(props) {
        super(props)
        this.state = {grid:""}  
        
    }
          
    componentDidMount(){
        this.determineGridType(this.props)
    }
    
    componentWillReceiveProps(nextProps) {
        this.determineGridType(nextProps)
    } 
    
    componentDidUpdate(){
        window.print()
    } 
    
    determineGridType(nextProps){
        if (nextProps.type==="fourDots"){
            this.drawFourDots(nextProps.distance, nextProps.unit, nextProps.colour)
        }else if(nextProps.type==="threeDots"){
            this.drawThreeDots(nextProps.distance, nextProps.unit, nextProps.colour)
        }else if(nextProps.type==="triangle"){                 
            this.drawTriangle(nextProps.distance, nextProps.unit, nextProps.colour)
        }else if(nextProps.type==="lines"){
            this.drawLines(nextProps.distance, nextProps.unit, nextProps.colour)
        }else if(nextProps.type==="rectangle"){
            this.drawRectangle(nextProps.distance, nextProps.unit, nextProps.colour)
        }else if(nextProps.type==="hexagon"){
            this.drawHexagon(nextProps.distance, nextProps.unit, nextProps.colour)
        }else{
            this.drawNotes(nextProps.distance, nextProps.unit, nextProps.colour)
        }   
    }
   
  drawFourDots(distance, unit, colour){
        var grid =[]
        const distanceMM = unit==="mm" ? distance : distance/0.03937
        const columns = unit==="mm" ? 210/distanceMM : 215.9/distanceMM
        const rows = unit==="mm" ? 297/distanceMM : 279.4/distanceMM
        for (let y = 0; y < (rows); y++){
            for (let i = 0; i < columns; i++){
                grid.push(<circle cx={i * distanceMM + "mm"} cy={y * distanceMM + "mm"} r="0.3mm" fill={colour}/>)
            }
        }
        console.log(grid)
        this.setState({grid: grid})
  }
                      
  drawThreeDots(distance, unit, colour){
        this.setState({grid:"Three Dots"})
  }
                      
  drawTriangle(distance, unit, colour){
        this.setState({grid:"Triangle"})
  }
                      
  drawLines(distance, unit, colour){
        this.setState({grid:"Lines"})
  }
                      
  drawRectangle(distance, unit, colour){
        this.setState({grid:"Rectangle"})
  }
                      
  drawHexagon(distance, unit, colour){
        this.setState({grid:"Hexagon"})
  }
                      
  drawNotes(distance, unit, colour){
        this.setState({grid:"Notes"})
  }

            
  render() {
    const width = this.props.unit==="mm" ? 210 : 8.5
    const height = this.props.unit==="mm" ? 297 : 11
    return (
        
        <div>
            <svg width={width + this.props.unit} height={height + this.props.unit}  xmlns="http://www.w3.org/2000/svg">
                {this.state.grid}
            </svg>
        </div>
	   )
  }
}
