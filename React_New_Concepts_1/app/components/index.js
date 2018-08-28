import React from 'react';
import {PropTypes} from 'react';
import FieldSet from 'FieldSet';

export default class Index extends React.Component{

	constructor(props){
		super(props);
		this.state={
			
		}
	}
	render(){
		const arr = ['jack','tom','ella','margretta','jam']
		return(
			<div>
				{'I am index'}
				<FieldSet name={arr}/>
			</div>
		);
	}
}
