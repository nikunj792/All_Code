import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DropDown from './component/dropdown';

export default class App extends React.Component{
	constructor(props){
		super(props);
		this.state={
			data:{}
		}
		this.getServiceData = this.getServiceData.bind(this);	
	}
	
	componentDidMount(){
		this.getServiceData();
	}
	
	getServiceData(){
		$.ajax({
			url: "http://localhost:3000/my-obp-api.json",
			dataType: "json",
			success:(data) => {
				console.log('Service Data is ',data);
				this.setState({
				data
				});
			},
			error:(err)=>{
				console.log('Error is ',err);
				}	
		});
		
	
	}
	render(){
		return (
			<div>					
				{<DropDown  data={this.state.data} />}
			</div>
				)
	}
}
ReactDOM.render(<App />, document.getElementById("reactForm"));
