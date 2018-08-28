import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import isNull from 'lodash';
import isEmpty from 'lodash';
import Table from './component/table';
import Sample from './component/sample';
import Gmail from './component/gmail';


export default class App extends React.Component{
	constructor(props){
		super(props);
		this.state={
			fname:'',
			lname:''
			
		}
	}
	handleCallBack(e){
		this.setState({
			fname:e.firstName,
			lname:e.lastName
		})
	}

	handleGmailCallBack(email, password){
		console.log(`email value is ${email} and password is ${password}`);
	}
	
	render(){		
		const object = [{name:'Nikunj'},{name:'Agarwal'},{name:'Sandeep'},{name:'Sharma'},]
		return (
			<div className="main">					
				{/* <Table fname={this.state.fname} object={object} lname={this.state.lname} handleCallBack={(e)=>this.handleCallBack(e)}/> */}
				{/* <Sample /> */}
				<Gmail handleGmailCallBack={(a,b)=>this.handleGmailCallBack(a,b)} />
				<div className="links">
					<div style={{
						
					}}>
						<a href="#">English</a>
						<a href="#">English</a>
					</div>
					<div>
						<a href="#">English</a>
						<a href="#">English</a>
					</div>
				</div>
			</div>
				)
	}
}
ReactDOM.render(<App />, document.getElementById("reactForm"));
