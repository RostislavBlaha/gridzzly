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
        for (let y = 0; y < rows; y++){
            for (let i = 0; i < columns; i++){
                grid.push(<circle cx={i * distanceMM + "mm"} cy={y * distanceMM + "mm"} r="0.3mm" fill={colour}/>)
            }
        }
        this.setState({grid: grid})
  }
                      
  drawThreeDots(distance, unit, colour){
        var grid =[]
        const distanceMM = unit==="mm" ? distance : distance/0.03937
        const verticalDistance = distanceMM/1.118
        const columns = unit==="mm" ? 210/distanceMM : 215.9/distanceMM
        const rows = unit==="mm" ? 297/verticalDistance : 279.4/verticalDistance
        var odd = true
        for (let y = 0; y < rows; y++){
            for (let i = 0; i < columns; i++){
                
                grid.push(odd ? <circle cx={(i * distanceMM) + (distanceMM/2) + "mm"} cy={y * verticalDistance + "mm"} r="0.3mm" fill={colour}/> : <circle cx={(i * distanceMM) + "mm"} cy={y * verticalDistance + "mm"} r="0.3mm" fill={colour}/>)
            }
            if (odd){
                odd=false
            }else{
                odd=true
            }
        }
        this.setState({grid: grid})
  }
                      
  drawTriangle(distance, unit, colour){
        this.setState({grid:"Triangle"})
  }
                      
  drawLines(distance, unit, colour){
        var grid =[]
		const width = unit==="mm" ? 210 : 215.9
        const distanceMM = unit==="mm" ? distance : distance/0.03937
		const rows = unit==="mm" ? 297/distanceMM : 279.4/distanceMM
        for (let i = 0; i < rows; i++){             
                grid.push(<line x1="0mm" y1={(i * distanceMM) + "mm"} x2={width + "mm"} y2={(i * distanceMM) + "mm"} stroke-width="0.3mm" stroke={colour}/>)
        }
        this.setState({grid: grid})
  }
                      
  drawRectangle(distance, unit, colour){
        var grid =[]
		const width = unit==="mm" ? 210 : 215.9
		const height = unit==="mm" ? 297 : 279.4
        const distanceMM = unit==="mm" ? distance : distance/0.03937
		const rows = height/distanceMM
		const columns = width/distanceMM
        for (let i = 0; i < rows; i++){             
                grid.push(<line x1="0mm" y1={(i * distanceMM) + "mm"} x2={width + "mm"} y2={(i * distanceMM) + "mm"} stroke-width="0.3mm" stroke={colour}/>)
        }
	  	for (let i = 0; i < columns; i++){             
                grid.push(<line x1={(i * distanceMM) + "mm"} y1="0mm" x2={(i * distanceMM) + "mm"} y2={height + "mm"} stroke-width="0.3mm" stroke={colour}/>)
        }
        this.setState({grid: grid})
  }
                      
  drawHexagon(distance, unit, colour){
        this.setState({grid:"Hexagon"})
  }
                      
  drawNotes(distance, unit, colour){
        var grid =[]
		const width = unit==="mm" ? 210 : 215.9
        const distanceMM = unit==="mm" ? distance+5 : (distance/0.03937)+5
		const rows = unit==="mm" ? 297/distanceMM : 279.4/distanceMM
		
        for (let i = 0; i < rows; i++){ 
			for (let y = 0; y < 5; y++){   
                grid.push(
					<line x1="0mm" y1={i * distanceMM + y + "mm"} x2={width + "mm"} y2={i * distanceMM + y + "mm"} stroke-width="0.3mm" stroke={colour}/>
				)
			}
        }
        this.setState({grid: grid})
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
