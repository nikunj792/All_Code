import React from 'react';
import { Subject } from 'rxjs/Subject';
import { map, filter } from 'rxjs/operators';
import FieldSet from 'FieldSet';
import SetState from 'SetState';


export default class Index extends React.Component{

	constructor(props){
		super(props);
		this.state={
			
		}
	}
	
	render(){
		const handler = new Subject();
		this.handler.next("Hi Hello");
		const arr = ['jack','tom','ella','margretta','jam'];
		range(1, 20).pipe(
			filter(x => x % 2 === 1),
			map(x => x + x)
		  ).subscribe(x => console.log(x));
		return(
			<div>
				{'I am index'}
				<FieldSet name={arr} handler={ this.handler} />
                <SetState />
			</div>
		);
	}
}
