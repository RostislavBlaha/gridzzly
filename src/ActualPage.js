import React, { Component } from 'react'


export default class ActualPage extends Component{
    constructor(props) {
        super(props)
        this.state = {	grid:"",
					 	width:"190",
					    height:"276"}  
        
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
		this.drawFourDots(nextProps.unit==="mm" ? nextProps.distance : nextProps.distance/0.03937, nextProps.unit, nextProps.colour)
	}else if(nextProps.type==="threeDots"){
		this.drawThreeDots(nextProps.unit==="mm" ? nextProps.distance : nextProps.distance/0.03937, nextProps.unit, nextProps.colour)
	}else if(nextProps.type==="triangle"){                 
		this.drawTriangle(nextProps.unit==="mm" ? nextProps.distance : nextProps.distance/0.03937, nextProps.unit, nextProps.colour)
	}else if(nextProps.type==="lines"){
		this.drawLines(nextProps.unit==="mm" ? nextProps.distance : nextProps.distance/0.03937, nextProps.unit, nextProps.colour)
	}else if(nextProps.type==="rectangle"){
		this.drawRectangle(nextProps.unit==="mm" ? nextProps.distance : nextProps.distance/0.03937, nextProps.unit, nextProps.colour)
	}else if(nextProps.type==="hexagon"){
		this.drawHexagon(nextProps.unit==="mm" ? nextProps.distance : nextProps.distance/0.03937, nextProps.unit, nextProps.colour)
	}else{
		this.drawNotes(nextProps.unit==="mm" ? nextProps.distance : nextProps.distance/0.03937, nextProps.unit, nextProps.colour, nextProps.staffNr)
	}   
  }
   
  drawFourDots(distance, unit, colour){
	var grid =[]
    const columns = Math.round(420/distance)
    const rows = Math.round(594/distance)
	var key = 0
	for (let y = 0; y < rows; y++){
		for (let x = 0; x < columns; x++){
			grid.push(
			  <circle key={key} cx={(x * distance + 0.3) + "mm"} cy={ (y * distance + 0.3) + "mm"} r="0.3mm" fill={colour}/>
			)
			key += 1
		}
	}
	this.setState({	grid: grid})
  }
                      
  drawThreeDots(distance, unit, colour){
	var grid =[]
    
	const verticalDistance = distance/1.118
    const halfDistance = distance/2
    
	const columns = Math.round(420/distance) 
	const rows = Math.round(594/verticalDistance)
    
	var odd = true
	var key = 0
	for (let y = 0; y < rows; y++){
		for (let x = 0; x < columns; x++){      
			grid.push(
			  odd ? <circle key={key} cx={(x * distance + halfDistance + 0.3) + "mm"} cy={(y * verticalDistance + 0.3) + "mm"} r="0.3mm" fill={colour}/> : <circle key={key} cx={(x * distance + 0.3) + "mm"} cy={(y * verticalDistance + 0.3) + "mm"} r="0.3mm" fill={colour}/>
			)
			key +=1
		}
		if (odd){
			odd=false
		}else{
			odd=true
		}
	}
	this.setState({	grid: grid})
  }
                      
  drawTriangle(distance, unit, colour){
    var grid =[]
    
	const halfDistance = distance/2
	const halfVertical = distance/1.118
	const verticalDistance = halfVertical*2 
    
    const columns = Math.round(420/distance) 
	const rows = Math.round(594/verticalDistance)

	var key = 0
	for (let y = 0; y < rows; y++){
		for (let x = 0; x < columns; x++){
			grid.push(
              <svg key={key} strokeWidth="0.1mm" fill="none" stroke={colour} width={ distance + "mm"} height={verticalDistance + "mm"} viewBox={"0 0 " + distance + " " + verticalDistance} x={x*distance + "mm"} y={y*verticalDistance + "mm"}>
                <polyline points={"0,0 " + distance + ",0"}/>
                <polyline points={"0," + halfVertical + " " + halfDistance + ",0 " + distance + "," + halfVertical + " 0," + halfVertical + " " + halfDistance + "," + verticalDistance + " " + distance + "," + halfVertical}/>
              </svg>
            )
			key += 1		
		}
	}
	
	this.setState({	grid: grid})
  }
                      
  drawLines(distance, unit, colour){
    var grid =[]
    
	const rows = Math.round(594/distance)
    
    var key = 0
    for (let i = 0; i < rows; i++){             
        grid.push(
          <line key={key} x1="0mm" y1={(i * distance) + "mm"} x2="420mm" y2={(i * distance) + "mm"} strokeWidth="0.1mm" stroke={colour}/>
        )
        key += 1
    }
	this.setState({grid: grid})
  }
                      
  drawRectangle(distance, unit, colour){
    var grid =[]
    const columns = Math.round(420/distance) 
	const rows = Math.round(594/distance)
    var key = 0
    var key2 = rows
    for (let i = 0; i < rows; i++){             
        grid.push(
          <line key={key} x1="0mm" y1={(i * distance) + "mm"} x2="420mm" y2={(i * distance) + "mm"} strokeWidth="0.1mm" stroke={colour}/>
        )
        key += 1        
    }
    for (let i = 0; i < columns; i++){             
        grid.push(
          <line key={key2} x1={(i * distance) + "mm"} y1="0mm" x2={(i * distance) + "mm"} y2="594mm" strokeWidth="0.1mm" stroke={colour}/>
        )
    key2 += 1
    }
    this.setState({grid: grid})
  }
                      
  drawHexagon(distance, unit, colour){
    var grid =[]
    
    const distanceY = distance*1.73
    const halfDistance = distance/2
    const oneSixthY = distanceY/6
    const halfY = distanceY/2
    const twoThirdsY = distanceY*2/3
    
    const columns = Math.round(420/distance)
    const rows = Math.round(594/distanceY)
    
    var key = 0
    for (let y = 0; y < rows; y++){
      for (let x = 0; x < columns; x++){
        grid.push(
          <svg key={key} strokeWidth="0.1mm" fill="none" stroke={colour} width={ distance + "mm"} height={distanceY + "mm"} viewBox={"0 0 " + distance + " " + distanceY} x={x*distance + "mm"} y={y*distanceY + "mm"}>
            <polyline points={distance + "," + oneSixthY + " " + halfDistance + ",0 0," + oneSixthY + " 0," + halfY + " " + halfDistance + ","+ twoThirdsY + " " + distance + "," + halfY + " " + distance + "," + oneSixthY}/>
            <polyline points={halfDistance + ","+ twoThirdsY + " " + halfDistance + "," + distanceY}/>
          </svg>
        )
        key += 1
      }
    }
    this.setState({ grid: grid})
  }
                      
  drawNotes(distance, unit, colour, staffNr){
	var grid = []
	const distanceMM =  distance + 15 * staffNr
	const rows = Math.round(594/distanceMM)
	var key = 0
    for (let z = 0; z < rows; z++){
      for (let i = 0; i < staffNr; i++){
          for (let y = 0; y < 5; y++){   
            grid.push(
              <line key={key} x1="0mm" y1={z * distanceMM + i * 15 + y*1.6 + "mm"} x2={"420mm"} y2={z * distanceMM + i * 15 + y*1.6 + "mm"} strokeWidth="0.1mm" stroke={colour}/>
            )
            key += 1
          }
      }
    }
    

	this.setState({	grid: grid})
  }

            
  render() {
    const sx = {
      position: "absolute",

      width: "100%", 
      height: "100%",
      overflow: "hidden"
    }
  
    return (
        
        <div>
            <svg    style={sx}
                    version="1.1" 
                    baseProfile="full"       
                    xmlns="http://www.w3.org/2000/svg">
                {this.state.grid}
            </svg>
        </div>
	   )
  }
}
