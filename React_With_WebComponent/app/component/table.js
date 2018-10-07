import React from 'react';
import PropTypes from 'prop-types';

export default class Table extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			fname:'',
			lname:''
		}
	}

	handleChange(e){
		this.setState({
			[e.target.name]:e.target.value
		})
	}

	handleSubmit(){	
		const obj ={};
		obj.firstName = this.state.fname;
		obj.lastName = this.state.lname;
		this.props.handleCallBack(obj);
	}

	render(){
		return (
				<div className="parent">
				<h1>I am a child Component</h1>
					<div className="form">
						<label for="fname">First Name </label><br />
						<input type="text" name="fname" id="fname" onChange={(e)=>this.handleChange(e)} /><br />
						<label for="lname">Last Name </label><br />
						<input type="text" name="lname" id="lname" onChange={(e)=>this.handleChange(e)} /> <br />
						<button onClick={()=>this.handleSubmit()}>Submit</button>
					</div>
					<p className="para">
							First Name you Enter is {this.props.fname} 
					</p>
					<p className="para">
							Last Name you Enter is {this.props.lname}
					</p>
					{this.props.object.map((item,index)=>{
						return(
							<div key={index} className="map">
								<p>{item.name}</p>
								<button>
									{index}
								</button>
							</div>
						);
					})}
					<div className="clear">
					</div>
				</div>
			);    
	}
}

Table.propTypes={};
Table.defaultProps={};