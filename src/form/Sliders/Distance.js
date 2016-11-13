import React, { Component } from 'react'
import Slider from './Slider'
import Input from './Input'

export default class Distance extends Component{

  render() {
	  const sx = {
        display: "flex",
        flexDirection: "row",
		    justifyContent: "space-between",
	  }
	  var values ={}
      if (this.props.unit==="mm" && this.props.type==="note"){
		values ={	min: "10",
			  		max: "30",
				    step: "1",}
	  }else if (this.props.unit==="in" && this.props.type==="note"){
	  	values ={	min: "0.375",
			  	 	max: "1.5",
				 	step: "0.0625"}
	  }else if (this.props.unit==="mm"){
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
          <Input    type="number"
                    value={this.props.distance}
                    defaultValue={values.min}
                    changeValue={this.props.changeDistance}
					           unit={this.props.unit}
                    changeUnit={this.props.changeUnit}/>
        </div>
	   )
  }
}
