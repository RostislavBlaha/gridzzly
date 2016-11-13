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
		this.drawNotes(nextProps.distance, nextProps.unit, nextProps.colour, nextProps.staffNr)
	}   
  }
   
  drawFourDots(distance, unit, colour){
	var grid =[]
	const distanceMM = unit==="mm" ? distance : distance/0.03937
	const width = unit==="mm" ? 190: 195.9
	const height = unit==="mm" ? 276: 259
	const columns = width/distanceMM
	const rows = height/distanceMM
	var key = 0
	for (let y = 0; y < rows; y++){
		for (let i = 0; i < columns; i++){
			grid.push(
			  <circle key={key} cx={i * distanceMM + "mm"} cy={ y * distanceMM + "mm"} r="0.3mm" fill={colour}/>
			)
			key += 1
		}
	}
	this.setState({	grid: grid,
					width: width,
					height: height})
  }
                      
  drawThreeDots(distance, unit, colour){
	var grid =[]
	const distanceMM = unit==="mm" ? distance : distance/0.03937
	const width = unit==="mm" ? 190: 195.9
	const height = unit==="mm" ? 276: 259
	const verticalDistance = distanceMM/1.118
	const columns = width/distanceMM 
	const rows = height/verticalDistance
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
	this.setState({	grid: grid,
					width: width,
					height: height})
  }
                      
  drawTriangle(distance, unit, colour){
    var grid =[]
	const width = unit==="mm" ? 190 : 195.9
	const height = unit==="mm" ? 276 : 259.4
	const distanceMM = unit==="mm" ? distance : distance/0.03937
	const halfDistance = distanceMM/2
	const halfVertical = distanceMM/1.118
	const verticalDistance = halfVertical*2 
	const rows = Math.round(height/verticalDistance)-1
	const columns = Math.round(width/distanceMM)-1
	const shortHeight = (rows)*verticalDistance
	const shortWidth = (columns)*distanceMM
	var key = 0
	for (let i = 0; i < rows; i++){
		for (let y = 0; y < columns; y++){
			grid.push(
				<g key={key}>
	             	<line x1={halfDistance + y*distanceMM + "mm"} y1={i * verticalDistance + "mm"} x2={y*distanceMM + "mm"} y2={halfVertical + i * verticalDistance + "mm"} strokeWidth="0.1mm" stroke={colour}/>
					<line x1={halfDistance + y*distanceMM + "mm"} y1={i * verticalDistance + "mm"} x2={distanceMM + y*distanceMM + "mm"} y2={halfVertical + i * verticalDistance + "mm"} strokeWidth="0.1mm" stroke={colour}/>
					<line x1={y*distanceMM + "mm"} y1={halfVertical + i * verticalDistance + "mm"} x2={distanceMM + y*distanceMM + "mm"} y2={halfVertical + i * verticalDistance + "mm"} strokeWidth="0.1mm" stroke={colour}/>
					<line x1={halfDistance + y*distanceMM + "mm"} y1={verticalDistance + i * verticalDistance + "mm"} x2={y*distanceMM + "mm"} y2={halfVertical + i * verticalDistance + "mm"} strokeWidth="0.1mm" stroke={colour}/>
					<line x1={halfDistance + y*distanceMM + "mm"} y1={verticalDistance + i * verticalDistance + "mm"} x2={distanceMM + y*distanceMM + "mm"} y2={halfVertical + i * verticalDistance + "mm"} strokeWidth="0.1mm" stroke={colour}/>
					<line x1={(y===0 ? halfDistance + y*distanceMM : y*distanceMM) + "mm"} y1={verticalDistance + i * verticalDistance + "mm"} x2={(y===columns-1 ? halfDistance + y*distanceMM  : distanceMM + y*distanceMM) + "mm"} y2={verticalDistance + i * verticalDistance + "mm"} strokeWidth="0.1mm" stroke={colour}/>
				</g>
            )
			key += 1		
		}
	}
	grid.push(<line key={key++} x1={halfDistance + "mm"} y1={0 + "mm"} x2={columns*distanceMM-halfDistance + "mm"} y2={0 + "mm"} strokeWidth="0.1mm" stroke={colour}/>)
	
	this.setState({	grid: grid,
					width: shortWidth,
					height: shortHeight})
  }
                      
  drawLines(distance, unit, colour){
    var grid =[]
	const width = unit==="mm" ? 190 : 195.9
	const height = unit==="mm" ? 276 : 259.4
    const distanceMM = unit==="mm" ? distance : distance/0.03937
	const rows = unit==="mm" ? 277/distanceMM : 259.4/distanceMM
    var key = 0
        for (let i = 0; i < rows; i++){             
            grid.push(
              <line key={key} x1="0mm" y1={(i * distanceMM) + "mm"} x2={width + "mm"} y2={(i * distanceMM) + "mm"} strokeWidth="0.1mm" stroke={colour}/>
            )
            key += 1
        }
	this.setState({	grid: grid,
					width: width,
					height: height})
  }
                      
  drawRectangle(distance, unit, colour){
        var grid =[]
		const width = unit==="mm" ? 190 : 195.9
		const height = unit==="mm" ? 277 : 259.4
        const distanceMM = unit==="mm" ? distance : distance/0.03937
		const rows = Math.round(height/distanceMM)
		const columns = Math.round(width/distanceMM)
		const shortHeight = (rows-1)*distanceMM
		const shortWidth = (columns-1)*distanceMM
    var key = 0
    var key2 = rows
        for (let i = 0; i < rows; i++){             
            grid.push(
              <line key={key} x1="0mm" y1={(i * distanceMM) + "mm"} x2={shortWidth + "mm"} y2={(i * distanceMM) + "mm"} strokeWidth="0.1mm" stroke={colour}/>
            )
            key += 1        
        }
	  	for (let i = 0; i < columns; i++){             
            grid.push(
              <line key={key2} x1={(i * distanceMM) + "mm"} y1="0mm" x2={(i * distanceMM) + "mm"} y2={shortHeight + "mm"} strokeWidth="0.1mm" stroke={colour}/>
            )
        key2 += 1
        }
        this.setState({	grid: grid,
					  	width: shortWidth,
					  	height:shortHeight})
  }
                      
  drawHexagon(distance, unit, colour){
    var grid =[]
    const distanceMM = unit==="mm" ? distance : distance/0.03937
		const width = unit==="mm" ? 190 : 195.9
		const height = unit==="mm" ? 276 : 259.4
    const distanceY = distanceMM*1.73
    const twothirdsY = distanceY*2/3
    const sevensixthY = distanceY*7/6
		const halfY = distanceY/2
    const halfX = distanceMM/2
    const sixthY = distanceY/6
		const rows = Math.round(height/distanceY-1)
		const columns = Math.round(width/distanceMM)
    const lastColumn = columns-1
    const lastRow = rows-1
    var key = 0
        for (let y = 0; y < rows; y++){
            for (let i = 0; i < columns; i++){
                if (i!==lastColumn && y===0){
                    grid.push(
                      <g key={key}>
                        <line x1={halfX + i*distanceMM + "mm"} y1={y * distanceY + "mm"} x2={i*distanceMM + "mm"} y2={sixthY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={halfX + i*distanceMM + "mm"} y1={y * distanceY + "mm"} x2={distanceMM + i*distanceMM + "mm"} y2={sixthY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={i*distanceMM + "mm"} y1={sixthY + y * distanceY + "mm"} x2={i*distanceMM + "mm"} y2={halfY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={i*distanceMM + "mm"} y1={halfY + y * distanceY + "mm"} x2={halfX + i*distanceMM + "mm"} y2={twothirdsY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={distanceMM + i*distanceMM + "mm"} y1={halfY + y * distanceY + "mm"} x2={halfX + i*distanceMM + "mm"} y2={twothirdsY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={halfX + i*distanceMM + "mm"} y1={distanceY + y * distanceY + "mm"} x2={halfX + i*distanceMM + "mm"} y2={twothirdsY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={halfX + i*distanceMM + "mm"} y1={distanceY + y * distanceY + "mm"} x2={i*distanceMM + "mm"} y2={sevensixthY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={halfX + i*distanceMM + "mm"} y1={distanceY + y * distanceY + "mm"} x2={distanceMM + i*distanceMM + "mm"} y2={sevensixthY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                      </g>
                    )
                }else if (i===lastColumn && y===0){
                    grid.push(
                      <g key={key}>
                        <line x1={halfX + i*distanceMM + "mm"} y1={y * distanceY + "mm"} x2={i*distanceMM + "mm"} y2={sixthY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={halfX + i*distanceMM + "mm"} y1={y * distanceY + "mm"} x2={distanceMM + i*distanceMM + "mm"} y2={sixthY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={i*distanceMM + "mm"} y1={sixthY + y * distanceY + "mm"} x2={i*distanceMM + "mm"} y2={halfY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={distanceMM + i*distanceMM + "mm"} y1={sixthY + y * distanceY + "mm"} x2={distanceMM + i*distanceMM + "mm"} y2={halfY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={i*distanceMM + "mm"} y1={halfY + y * distanceY + "mm"} x2={halfX + i*distanceMM + "mm"} y2={twothirdsY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={distanceMM + i*distanceMM + "mm"} y1={halfY + y * distanceY + "mm"} x2={halfX + i*distanceMM + "mm"} y2={twothirdsY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={halfX + i*distanceMM + "mm"} y1={distanceY + y * distanceY + "mm"} x2={halfX + i*distanceMM + "mm"} y2={twothirdsY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={halfX + i*distanceMM + "mm"} y1={distanceY + y * distanceY + "mm"} x2={i*distanceMM + "mm"} y2={sevensixthY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={halfX + i*distanceMM + "mm"} y1={distanceY + y * distanceY + "mm"} x2={distanceMM + i*distanceMM + "mm"} y2={sevensixthY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                      </g>
                    )
                }else if (i===lastColumn && y!==0 && y!==lastRow){
                    grid.push(
                      <g key={key}>
                        <line x1={i*distanceMM + "mm"} y1={sixthY + y * distanceY + "mm"} x2={i*distanceMM + "mm"} y2={halfY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={distanceMM + i*distanceMM + "mm"} y1={sixthY + y * distanceY + "mm"} x2={distanceMM + i*distanceMM + "mm"} y2={halfY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={i*distanceMM + "mm"} y1={halfY + y * distanceY + "mm"} x2={halfX + i*distanceMM + "mm"} y2={twothirdsY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={distanceMM + i*distanceMM + "mm"} y1={halfY + y * distanceY + "mm"} x2={halfX + i*distanceMM + "mm"} y2={twothirdsY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={halfX + i*distanceMM + "mm"} y1={distanceY + y * distanceY + "mm"} x2={halfX + i*distanceMM + "mm"} y2={twothirdsY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={halfX + i*distanceMM + "mm"} y1={distanceY + y * distanceY + "mm"} x2={i*distanceMM + "mm"} y2={sevensixthY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={halfX + i*distanceMM + "mm"} y1={distanceY + y * distanceY + "mm"} x2={distanceMM + i*distanceMM + "mm"} y2={sevensixthY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                      </g>
                    )
                }else if (y===lastRow && i===lastColumn){
                      grid.push(
                        <g key={key}>
                        <line x1={i*distanceMM + "mm"} y1={sixthY + y * distanceY + "mm"} x2={i*distanceMM + "mm"} y2={halfY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={distanceMM + i*distanceMM + "mm"} y1={sixthY + y * distanceY + "mm"} x2={distanceMM + i*distanceMM + "mm"} y2={halfY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={i*distanceMM + "mm"} y1={halfY + y * distanceY + "mm"} x2={halfX + i*distanceMM + "mm"} y2={twothirdsY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={distanceMM + i*distanceMM + "mm"} y1={halfY + y * distanceY + "mm"} x2={halfX + i*distanceMM + "mm"} y2={twothirdsY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={halfX + i*distanceMM + "mm"} y1={distanceY + y * distanceY + "mm"} x2={halfX + i*distanceMM + "mm"} y2={twothirdsY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>        
                        <line x1={halfX + i*distanceMM + "mm"} y1={distanceY + y * distanceY + "mm"} x2={i*distanceMM + "mm"} y2={sevensixthY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                      </g>
                    )
                }else if (y===lastRow && i===0){
                      grid.push(
                        <g key={key}>
                        <line x1={i*distanceMM + "mm"} y1={sixthY + y * distanceY + "mm"} x2={i*distanceMM + "mm"} y2={halfY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={distanceMM + i*distanceMM + "mm"} y1={sixthY + y * distanceY + "mm"} x2={distanceMM + i*distanceMM + "mm"} y2={halfY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={i*distanceMM + "mm"} y1={halfY + y * distanceY + "mm"} x2={halfX + i*distanceMM + "mm"} y2={twothirdsY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={distanceMM + i*distanceMM + "mm"} y1={halfY + y * distanceY + "mm"} x2={halfX + i*distanceMM + "mm"} y2={twothirdsY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={halfX + i*distanceMM + "mm"} y1={distanceY + y * distanceY + "mm"} x2={halfX + i*distanceMM + "mm"} y2={twothirdsY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>  
    
                        <line x1={halfX + i*distanceMM + "mm"} y1={distanceY + y * distanceY + "mm"} x2={distanceMM + i*distanceMM + "mm"} y2={sevensixthY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                      </g>
                    )
                }else{
                    grid.push(
                      <g key={key}>
                        <line x1={i*distanceMM + "mm"} y1={sixthY + y * distanceY + "mm"} x2={i*distanceMM + "mm"} y2={halfY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={i*distanceMM + "mm"} y1={halfY + y * distanceY + "mm"} x2={halfX + i*distanceMM + "mm"} y2={twothirdsY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={distanceMM + i*distanceMM + "mm"} y1={halfY + y * distanceY + "mm"} x2={halfX + i*distanceMM + "mm"} y2={twothirdsY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={halfX + i*distanceMM + "mm"} y1={distanceY + y * distanceY + "mm"} x2={halfX + i*distanceMM + "mm"} y2={twothirdsY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={halfX + i*distanceMM + "mm"} y1={distanceY + y * distanceY + "mm"} x2={i*distanceMM + "mm"} y2={sevensixthY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={halfX + i*distanceMM + "mm"} y1={distanceY + y * distanceY + "mm"} x2={distanceMM + i*distanceMM + "mm"} y2={sevensixthY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                      </g>
                    )
                }
                key += 1
            
            }
        }
        this.setState({grid: grid,
					  width: width,
					  height: height})
  }
                      
  drawNotes(distance, unit, colour, staffNr){
	var grid = []
	const width = unit==="mm" ? 190 : 195.9
	const height = unit==="mm" ? 276 : 259.4
	const distanceMM = unit==="mm" ? distance + 15 * staffNr  : distance/0.03937 + 17 * staffNr
	const rows = unit==="mm" ? 277/distanceMM : 259.4/distanceMM
	var key = 0
    for (let z = 0; z < rows; z++){
      for (let i = 0; i < staffNr; i++){
          for (let y = 0; y < 5; y++){   
            grid.push(
              <line key={key} x1="0mm" y1={z * distanceMM + i * 15 + y*1.6 + "mm"} x2={width + "mm"} y2={z * distanceMM + i * 15 + y*1.6 + "mm"} strokeWidth="0.1mm" stroke={colour}/>
            )
            key += 1
          }
      }
    }
    

	this.setState({	grid: grid,
				width: width,
				height: height})
  }

            
  render() {
    return (
        
        <div>
            <svg width={this.state.width + "mm"} height={this.state.height + "mm"}  xmlns="http://www.w3.org/2000/svg">
                {this.state.grid}
            </svg>
        </div>
	   )
  }
}
