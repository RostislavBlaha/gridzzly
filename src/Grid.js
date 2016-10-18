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
        console.log(nextProps.type)
        if (nextProps.type==="fourDots"){
            this.drawFourDots(nextProps.distance, nextProps.unit, nextProps.colour)
        }else if(nextProps.type==="threeDots"){
            this.drawThreeDots(nextProps.distance, nextProps.unit, nextProps.colour)
        }else if(nextProps.type==="rectangle"){
            this.drawRectangle(nextProps.distance, nextProps.unit, nextProps.colour)
        }
    }
      
    drawFourDots(distance, unit, colour){ 
        this.setState({grid: "data:image/svg+xml;charset=UTF-8," + window.encodeURIComponent("<svg width=\"" + distance + unit + "\" height=\"" + distance + unit + "\" viewPort=\"0 0 5mm 5mm\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"" + (distance - 1) + unit + "\" cy=\"" + (distance - 1) + unit + "\" r=\"0.3mm\" fill=\"" + colour + "\"/></svg>")})
    }  
    
    drawThreeDots(distance, unit, colour){ 
        this.setState({grid: "data:image/svg+xml;charset=UTF-8," + window.encodeURIComponent("<svg width=\"" + distance + unit + "\" height=\"" + (distance*1.73) + unit + "\" viewPort=\"0 0 5mm 5mm\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"" + ((distance/2)-1) + unit + "\" cy=\"" + ((distance*1.73/2) - 1) + unit + "\" r=\"0.3mm\" fill=\"" + colour + "\"/><circle cx=\"" + (distance - 1) + unit + "\" cy=\"" + (distance*1.73 - 1) + unit + "\" r=\"0.3mm\" fill=\"" + colour + "\"/></svg>")})
    } 
    
    drawRectangle(distance, unit, colour){ 
        console.log("width: " + distance + unit)
        this.setState({grid: "data:image/svg+xml;charset=UTF-8," +             window.encodeURIComponent("<svg width=\"" + distance + unit +"\" height=\"" + distance + unit +"\" viewPort=\"0 0 5mm 5mm\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"" + 0 + unit + "\" y1=\"" + (distance - 1) + unit + "\" x2=\"" + distance + unit + "\" y2=\"" + (distance - 1) + unit + "\" stroke-width=\"0.3mm\" stroke=\"" + colour + "\"/><line x1=\"" + (distance - 1) + unit + "\" y1=\"" + 0 + unit + "\" x2=\"" + (distance - 1) + unit + "\" y2=\"" + distance + unit + "\" stroke-width=\"0.3mm\" stroke=\"" + colour + "\"/></svg>")
        })
    } 
	
 
  render() {
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight - 105
    const sx = {width: "100%",
                height: windowHeight,
                backgroundImage: 'url('+ this.state.grid +')',
                //backgroundRepeat: "no-repeat",
                backgroundPosition: "2px 2px",}

    return (
	 	<div style={sx}>
			<svg width={windowWidth} height={windowHeight}>
			</svg>
		</div>
	)
  }
}
