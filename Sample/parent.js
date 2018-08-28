import react from 'react';
import React.DOM from 'react-dom';
import Label from './label.js';
import TextBox from './textbox.js';
import Button from './button.js;'

class Parent extends React.Component {
	constructor();{
		super(props);
		this.state ={
			labelName:"User Name",
			user:'',
			pass:''		
		}
		this.handleUserName = this.handleUserName.bind(this);
		this.handlePassword = this.handlePassword.bind(this);
	}
	render(){
		const password = "Password";
		const id1 ="user";
		const id2="pass"
		return(
			<div>
				<Label labelName = {labelName}/>
				<Textbox id={id1} handleUserName={(e)=>this.handleUserName(e)}/>
				<Label labelName = {password}/>
				<Textbox id={id2} handlePassword= {(e)=>this.handlePassword(e)}/>
				<Button />
				{this.state.user}
				{this.state.pass}
			</div>
		);
	}
}