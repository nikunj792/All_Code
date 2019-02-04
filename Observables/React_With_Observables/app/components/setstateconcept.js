import React from 'react';

export default class SetState extends React.Component{

	constructor(props){
		super(props);
		this.state={
			count:0,
			age:10
		}
	}
	handleFunctionalChange(){
		this.setState((prevState, prevProps)=>({
			count: prevState.count +1
		}))
	}

	handleObjectChange(){
		this.setState({
			age: this.state.age +1
		})
	}
	render(){
		
		return(
			<div>
				{`Functional Approach ${this.state.count} `}<br /><br />
				{`Object Approach ${this.state.age} `}<br /><br />
				<input type="text" onChange={()=>this.handleFunctionalChange()} /><br /><br />
				<button onClick={()=>this.handleObjectChange()}>Object Approach</button><br /><br />
			</div>
		);
	}
}
