import React from 'react';
import Loadable from 'react-loadable';
import ("./math").then(item=>{
    console.log(math.add(12,13));
})

const LoadableOtherComponent = Loadable({
    
})

export default class CodeSplit extends React.Component{

	constructor(props){
		super(props);
	}

	render(){
		console.log('I am Sample render method');
		return(
			<div>{'Hello'}</div>
		);
	}
}

