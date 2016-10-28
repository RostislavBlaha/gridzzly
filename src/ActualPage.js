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
        const columns = unit==="mm" ? 190/distanceMM : 195.9/distanceMM
        const rows = unit==="mm" ? 277/distanceMM : 259.4/distanceMM
        var key = 0
        for (let y = 0; y < rows; y++){
            for (let i = 0; i < columns; i++){
                grid.push(
                  <circle key={key} cx={i * distanceMM + "mm"} cy={ y * distanceMM + "mm"} r="0.3mm" fill={colour}/>
                )
                key += 1
            }
        }
        this.setState({grid: grid})
  }
                      
  drawThreeDots(distance, unit, colour){
        var grid =[]
        const distanceMM = unit==="mm" ? distance : distance/0.03937
        const verticalDistance = distanceMM/1.118
        const columns = unit==="mm" ? 190/distanceMM : 195.9/distanceMM
        const rows = unit==="mm" ? 277/verticalDistance : 259.4/verticalDistance
        var odd = true
        var key = 0
        for (let y = 0; y < rows; y++){
            for (let i = 0; i < columns; i++){      
                grid.push(
                  odd ? <circle key={key} cx={(i * distanceMM) + (distanceMM/2) + "mm"} cy={y * verticalDistance + "mm"} r="0.3mm" fill={colour}/> : <circle key={key} cx={(i * distanceMM) + "mm"} cy={y * verticalDistance + "mm"} r="0.3mm" fill={colour}/>
                )
                key +=1
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
    var grid =[]
		const width = unit==="mm" ? 190 : 195.9
		const height = unit==="mm" ? 277 : 259.4
        const distanceMM = unit==="mm" ? distance : distance/0.03937
		const verticalDistance = distanceMM/1.118
		const doubleVertical = verticalDistance*2 
		const rows = height/verticalDistance
		const columns = width/distanceMM
		const diagonals = rows + columns
    var key = 0
    var key2 = rows
    for (let i = 0; i < rows; i++){                           
				grid.push(
					<line key={key} x1="0mm" y1={i*verticalDistance + "mm"} x2={width + "mm"} y2={i*verticalDistance + "mm"} strokeWidth="0.3mm" stroke={colour}/>
				)   	
        key += 1
    }
      for (let i = 0; i < diagonals; i++){                           
				grid.push(
            <g key={key2}>
              <line x1="0mm" y1={i*doubleVertical + "mm"} x2={i*distanceMM + "mm"} y2="0mm" strokeWidth="0.3mm" stroke={colour}/>
              <line x1={width - i*distanceMM + "mm"} y1="0mm" x2={width + "mm"} y2={i*doubleVertical + "mm"} strokeWidth="0.3mm" stroke={colour}/> 
            </g>
				)  
        key2 += 1
      }
	  	this.setState({grid: grid})
  }
                      
  drawLines(distance, unit, colour){
    var grid =[]
		const width = unit==="mm" ? 190 : 195.9
    const distanceMM = unit==="mm" ? distance : distance/0.03937
		const rows = unit==="mm" ? 277/distanceMM : 259.4/distanceMM
    var key = 0
        for (let i = 0; i < rows; i++){             
            grid.push(
              <line key={key} x1="0mm" y1={(i * distanceMM) + "mm"} x2={width + "mm"} y2={(i * distanceMM) + "mm"} strokeWidth="0.3mm" stroke={colour}/>
            )
            key += 1
        }
        this.setState({grid: grid})
  }
                      
  drawRectangle(distance, unit, colour){
        var grid =[]
		const width = unit==="mm" ? 190 : 195.9
		const height = unit==="mm" ? 277 : 259.4
        const distanceMM = unit==="mm" ? distance : distance/0.03937
		const rows = height/distanceMM
		const columns = width/distanceMM
    var key = 0
    var key2 = rows
        for (let i = 0; i < rows; i++){             
            grid.push(
              <line key={key} x1="0mm" y1={(i * distanceMM) + "mm"} x2={width + "mm"} y2={(i * distanceMM) + "mm"} strokeWidth="0.3mm" stroke={colour}/>
            )
            key += 1        
        }
	  	for (let i = 0; i < columns; i++){             
            grid.push(
              <line key={key2} x1={(i * distanceMM) + "mm"} y1="0mm" x2={(i * distanceMM) + "mm"} y2={height + "mm"} strokeWidth="0.3mm" stroke={colour}/>
            )
        key2 += 1
        }
        this.setState({grid: grid})
  }
                      
  drawHexagon(distance, unit, colour){
	  	var grid =[]
	  	const distanceMM = unit==="mm" ? distance : distance/0.03937
		const width = unit==="mm" ? 190 : 195.9
		const height = unit==="mm" ? 277 : 259.4
        const distanceY = distanceMM*1.73
		const thirdY = distanceY/3
		const fivesixthY = distanceY*5/6
		const halfY = distanceY/2
        const halfX = distanceMM/2
		const rows = height/distanceY
		const columns = width/distanceMM
    var key = 0
        for (let y = 0; y < rows; y++){
            for (let i = 0; i < columns; i++){
                grid.push(
                  <g key={key}>
                    <line x1={i*distanceMM + "mm"} y1={y * distanceY + "mm"} x2={i*distanceMM + "mm"} y2={thirdY + y * distanceY + "mm"} strokeWidth="0.3mm" stroke={colour}/>
                    <line x1={i*distanceMM + "mm"} y1={thirdY + y * distanceY + "mm"} x2={halfX + i*distanceMM + "mm"} y2={halfY + y * distanceY + "mm"} strokeWidth="0.3mm" stroke={colour}/>
                    <line x1={distanceMM + i*distanceMM + "mm"} y1={thirdY + y * distanceY + "mm"} x2={halfX + i*distanceMM + "mm"} y2={halfY + y * distanceY + "mm"} strokeWidth="0.3mm" stroke={colour}/>
                    <line x1={halfX + i*distanceMM + "mm"} y1={fivesixthY + y * distanceY + "mm"} x2={halfX + i*distanceMM + "mm"} y2={halfY + y * distanceY + "mm"} strokeWidth="0.3mm" stroke={colour}/>
                    <line x1={halfX + i*distanceMM + "mm"} y1={fivesixthY + y * distanceY + "mm"} x2={i*distanceMM + "mm"} y2={distanceY + y * distanceY + "mm"} strokeWidth="0.3mm" stroke={colour}/>
                    <line x1={halfX + i*distanceMM + "mm"} y1={fivesixthY + y * distanceY + "mm"} x2={distanceMM + i*distanceMM + "mm"} y2={distanceY + y * distanceY + "mm"} strokeWidth="0.3mm" stroke={colour}/>
                  </g>
				        )
                key += 1
            
            }
        }
        this.setState({grid: grid})
  }
                      
  drawNotes(distance, unit, colour){
        var grid =[]
		const width = unit==="mm" ? 190 : 195.9
    const distanceMM = unit==="mm" ? distance+5 : (distance/0.03937)+5
		const rows = unit==="mm" ? 277/distanceMM : 259.4/distanceMM
		var key = 0
    for (let i = 0; i < rows; i++){ 
			for (let y = 0; y < 5; y++){   
                grid.push(
					<line key={key} x1="0mm" y1={i * distanceMM + y + "mm"} x2={width + "mm"} y2={i * distanceMM + y + "mm"} strokeWidth="0.3mm" stroke={colour}/>
				)
        key += 1
			}
        }
        this.setState({grid: grid})
  }

            
  render() {
    const width = this.props.unit==="mm" ? 190 : 8.5
    const height = this.props.unit==="mm" ? 277 : 11
    return (
        
        <div>
            <svg width={width + this.props.unit} height={height + this.props.unit}  xmlns="http://www.w3.org/2000/svg">
                {this.state.grid}
            </svg>
        </div>
	   )
  }
}
