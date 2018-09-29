import React from 'react';
import {PropTypes} from 'react';
import Example from 'Example';

const ContextUserProps = React.createContext('Nikunj');
const ContextAgeProps = React.createContext('25');
export default class Sample extends React.Component{

	constructor(props){
		super(props);
		this.state={
			fname:'Jack'
		}
		console.log('I am Sample constructor method');
	}
	
	componentWillMount(){
		console.log('I am componentWill Mount');
	}

	handleClick(){
		this.setState({
			fname: 'Ella'
		})
	}
	render(){
		console.log('I am Sample render method');
		return(
			<ContextUserProps.Provider value="NIkunj">
				<h1>{'Hello'}</h1>
				<h2>{'World'}</h2>
				{this.state.fname}
				<button onClick={()=>this.handleClick()}> {'Click Me'} </button><br />
				<Example name={this.state.fname} handle={()=>this.handleClick() } />
				{/* <FirstChild /> */}
			</ContextUserProps.Provider>
		);
	}
}

function FirstChild(props){
	return(
		<div>
			{'I am first Child'}
			<SecondChild />
		</div>
	);
}

function  SecondChild(props){
	return(
		// <ContextUserProps.Consumer>
		// 	{user=><ThirdChild {...props} theme={user} />}
		// </ContextUserProps.Consumer>
		<div>
			{'I am second child'}
			<ThirdChild />
		</div>
	);
}
function ThirdChild(){
		return(
			<ContextAgeProps.Provider value="sdsadsadsadsa">
			{'I am third'}
				<ForthChild />
			</ContextAgeProps.Provider>	
		);
}
class ForthChild extends React.Component{
	render(){
	return(
		<ContextAgeProps.Consumer>	
		{age =><FifthChild age={age} />}
		</ContextAgeProps.Consumer>
	);
}
}

function  FifthChild(props){
	return(
		<div>
			{console.log('dfsdfdsf',props)}
		</div>
	);
}
