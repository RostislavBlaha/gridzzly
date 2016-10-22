import React, { Component } from 'react'
import Slider from './Slider'
import Input from './Input'
import Unit from './Unit'

export default class Distance extends Component{
 
  render() {
	  const sx = {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        paddingTop: "30px",
        paddingLeft: "30px"
	  }
	  var values ={}
	  if (this.props.unit==="mm"){
		values ={	min: "5",
			  		max: "20",
				    step: "1",}
	  }else{
	  	values ={	min: "0.1875",
			  	 	max: "1",
				 	step: "0.0625"}
	  }
    
    return (
        <div style={sx}>
          <Slider   value={this.props.distance} 
                    changeValue={this.props.changeDistance}
                    minValue={values.min}
                    maxValue={values.max}
					step={values.step}/>
          <Input    value={this.props.distance}
                    defaultValue={values.min}
                    changeValue={this.props.changeDistance}/>
          <Unit     unit={this.props.unit}
                    changeUnit={this.props.changeUnit}/>
        </div>
	   )
  }
}