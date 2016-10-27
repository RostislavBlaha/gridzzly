import React, { Component } from 'react'

export default class Grid extends Component{
    constructor(props) {
        super(props)
        this.state = {grid:""}  
    }
	
    componentDidMount(){
        this.drawFourDots(this.props.distance, this.props.unit, this.props.colour)     
    }
    
    componentWillReceiveProps(nextProps) {
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
        this.setState({grid: "data:image/svg+xml;charset=UTF-8," + window.encodeURIComponent("<svg width=\"" + distance + unit + "\" height=\"" + distance + unit + "\" viewPort=\"0 0 5mm 5mm\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"4mm\" cy=\"4mm\" r=\"0.3mm\" fill=\"" + colour + "\"/></svg>")})
    }  
    
    drawThreeDots(distance, unit, colour){ 
		const distanceMM = unit==="mm" ? distance : distance/0.03937
        this.setState({grid: "data:image/svg+xml;charset=UTF-8," + window.encodeURIComponent("<svg width=\"" + distanceMM + "mm\" height=\"" + (distanceMM*1.73) + "mm\" viewPort=\"0 0 5mm 5mm\" xmlns=\"http://www.w3.org/2000/svg\"> <circle cx=\"" + ((distanceMM/2)-1) + "mm\" cy=\"" + ((distanceMM*1.73/2) - 1) + "mm\" r=\"0.3mm\" fill=\"" + colour + "\"/> <circle cx=\"" + (distanceMM - 1) + "mm\" cy=\"" + (distanceMM*1.73 - 1) + "mm\" r=\"0.3mm\" fill=\"" + colour + "\"/> </svg>")})
    } 
    
    drawTriangle(distance, unit, colour){
        const distanceY = distance*1.73
        const quaterX = distance/4
        const threeQuatersX = 3*quaterX
        const quaterY = distanceY/4
        const threeQuatersY = 3*quaterY
        this.setState({grid: "data:image/svg+xml;charset=UTF-8," + window.encodeURIComponent("<svg width=\"" + distance + unit + "\" height=\"" + distanceY + unit + "\" viewPort=\"0 0 5mm 5mm\" xmlns=\"http://www.w3.org/2000/svg\"> <line x1=\"" + quaterX + unit + "\" y1=\"" + 0 + unit + "\" x2=\"" + distance + unit + "\" y2=\"" + threeQuatersY + unit + "\" stroke-width=\"0.3mm\" stroke=\"" + colour + "\"/> <line x1=\"" + threeQuatersX + unit + "\" y1=\"" + 0 + unit + "\" x2=\"" + 0 + unit + "\" y2=\"" + threeQuatersY + unit + "\" stroke-width=\"0.3mm\" stroke=\"" + colour + "\"/> <line x1=\"" + distance + unit + "\" y1=\"" + quaterY + unit + "\" x2=\"" + 0 + unit + "\" y2=\"" + quaterY + unit + "\" stroke-width=\"0.3mm\" stroke=\"" + colour + "\"/> <line x1=\"" + distance + unit + "\" y1=\"" + threeQuatersY + unit + "\" x2=\"" + 0 + unit + "\" y2=\"" + threeQuatersY + unit + "\" stroke-width=\"0.3mm\" stroke=\"" + colour + "\"/> <line x1=\"" + 0 + unit + "\" y1=\"" + threeQuatersY + unit + "\" x2=\"" + quaterX + unit + "\" y2=\"" + distanceY + unit + "\" stroke-width=\"0.3mm\" stroke=\"" + colour + "\"/> <line x1=\"" + distance + unit + "\" y1=\"" + threeQuatersY + unit + "\" x2=\"" + threeQuatersX + unit + "\" y2=\"" + distanceY + unit + "\" stroke-width=\"0.3mm\" stroke=\"" + colour + "\"/> </svg>")})
    } 
    
    drawLines(distance, unit, colour){ 
        this.setState({grid: "data:image/svg+xml;charset=UTF-8," +             window.encodeURIComponent("<svg width=\"5mm\" height=\"" + distance + unit +"\" viewPort=\"0 0 5mm 5mm\" xmlns=\"http://www.w3.org/2000/svg\"> <line x1=\"0mm\" y1=\"4mm\" x2=\"5mm\" y2=\"4mm\" stroke-width=\"0.3mm\" stroke=\"" + colour + "\"/> </svg>")
        })
    } 
    
    drawRectangle(distance, unit, colour){ 
		const distanceMM = unit==="mm" ? distance : distance/0.03937
        const adjustedDistance = distanceMM - 1
        this.setState({grid: "data:image/svg+xml;charset=UTF-8," +             window.encodeURIComponent("<svg width=\"" + distanceMM + "mm\" height=\"" + distanceMM + "mm\" viewPort=\"0 0 5mm 5mm\" xmlns=\"http://www.w3.org/2000/svg\"> <line x1=\"0mm\" y1=\"" + adjustedDistance + "mm\" x2=\"" + distanceMM + "mm\" y2=\"" + adjustedDistance + "mm\" stroke-width=\"0.3mm\" stroke=\"" + colour + "\"/> <line x1=\"" + adjustedDistance + "mm\" y1=\"0mm\" x2=\"" + adjustedDistance + "mm\" y2=\"" +distanceMM + "mm\" stroke-width=\"0.3mm\" stroke=\"" + colour + "\"/> </svg>")
        })
    }
    
    drawHexagon(distance, unit, colour){
        const distanceY = distance*1.73
        const quaterX = distance/4
        const threeQuatersX = 3*quaterX
        const halfY = distanceY/2
        const thirdY = distanceY/3
        const fiveSixthY = distanceY*5/6
        const fiveTwelfthY = distanceY*5/12
        const elevenTweflthY = distanceY*11/12 
        this.setState({grid: "data:image/svg+xml;charset=UTF-8," + window.encodeURIComponent("<svg width=\"" + distance + unit + "\" height=\"" + distanceY + unit + "\" viewPort=\"0 0 5mm 5mm\" xmlns=\"http://www.w3.org/2000/svg\"> <line x1=\"" + quaterX + unit + "\" y1=\"" + 0 + unit + "\" x2=\"" + quaterX + unit + "\" y2=\"" + thirdY + unit + "\" stroke-width=\"0.3mm\" stroke=\"" + colour + "\"/> <line x1=\"" + quaterX + unit + "\" y1=\"" + thirdY + unit + "\" x2=\"" + 0 + unit + "\" y2=\"" + fiveTwelfthY + unit + "\" stroke-width=\"0.3mm\" stroke=\"" + colour + "\"/> <line x1=\"" + quaterX + unit + "\" y1=\"" + thirdY + unit + "\" x2=\"" + threeQuatersX + unit + "\" y2=\"" + halfY + unit + "\" stroke-width=\"0.3mm\" stroke=\"" + colour + "\"/> <line x1=\"" + threeQuatersX + unit + "\" y1=\"" + halfY + unit + "\" x2=\"" + distance + unit + "\" y2=\"" + fiveTwelfthY + unit + "\" stroke-width=\"0.3mm\" stroke=\"" + colour + "\"/> <line x1=\"" + threeQuatersX + unit + "\" y1=\"" + halfY + unit + "\" x2=\"" + threeQuatersX + unit + "\" y2=\"" + fiveSixthY + unit + "\" stroke-width=\"0.3mm\" stroke=\"" + colour + "\"/> <line x1=\"" + threeQuatersX + unit + "\" y1=\"" + fiveSixthY + unit + "\" x2=\"" + quaterX + unit + "\" y2=\"" + distanceY + unit + "\" stroke-width=\"0.3mm\" stroke=\"" + colour + "\"/> <line x1=\"" + quaterX + unit + "\" y1=\"" + distanceY + unit + "\" x2=\"" + 0 + unit + "\" y2=\"" + elevenTweflthY + unit + "\" stroke-width=\"0.3mm\" stroke=\"" + colour + "\"/> <line x1=\"" + threeQuatersX + unit + "\" y1=\"" + fiveSixthY + unit + "\" x2=\"" + distance + unit + "\" y2=\"" + elevenTweflthY + unit + "\" stroke-width=\"0.3mm\" stroke=\"" + colour + "\"/> </svg>")})
    } 
        
    drawNotes(distance, unit, colour){ 
        const distanceY = unit==="mm" ? 5 + distance : 5 + distance/0.03937
        const lineHeight = 1
        const line1 = distanceY - 1 * lineHeight
        const line2 = distanceY - 2 * lineHeight
        const line3 = distanceY - 3 * lineHeight
        const line4 = distanceY - 4 * lineHeight
        const line5 = distanceY - 5 * lineHeight
        this.setState({grid: "data:image/svg+xml;charset=UTF-8," +             window.encodeURIComponent("<svg width=\"5mm\" height=\"" + distanceY + "mm\" viewPort=\"0 0 5mm 10mm\" xmlns=\"http://www.w3.org/2000/svg\"> <line x1=\"0mm\" y1=\"" + line1 + "mm\" x2=\"5mm\" y2=\"" + line1 + "mm\" stroke-width=\"0.3mm\" stroke=\"" + colour + "\"/> <line x1=\"0mm\" y1=\"" + line2 + "mm\" x2=\"5mm\" y2=\"" + line2 + "mm\" stroke-width=\"0.3mm\" stroke=\"" + colour + "\"/> <line x1=\"0mm\" y1=\"" + line3 + "mm\" x2=\"5mm\" y2=\"" + line3 + "mm\" stroke-width=\"0.3mm\" stroke=\"" + colour + "\"/> <line x1=\"0mm\" y1=\"" + line4 + "mm\" x2=\"5mm\" y2=\"" + line4 + "mm\" stroke-width=\"0.3mm\" stroke=\"" + colour + "\"/> <line x1=\"0mm\" y1=\"" + line5 + "mm\" x2=\"5mm\" y2=\"" + line5 + "mm\" stroke-width=\"0.3mm\" stroke=\"" + colour + "\"/> </svg>")
        })
    }
     
	
 
  render() {
    const sx = {width: this.props.width,
                height: this.props.height,
                position: "absolute",
                top: 0,
                left: 0,
                backgroundImage: 'url('+ this.state.grid +')',
                backgroundPosition: "2px 2px",}

    return (
	 	<div style={sx}>
			<svg width={this.props.width} height={this.props.height}>
			</svg>
		</div>
	)
  }
}
