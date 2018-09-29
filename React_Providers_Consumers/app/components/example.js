import React from 'react';
import {PropTypes} from 'react';
import get from 'lodash/get';
import Context from 'Context';

const ContextUserProps = React.createContext('Nikunj');
export default class Example extends React.Component{

	static getDerivedStateFromProps(props, state){
		console.log('I am getDerivedStateFromProps method of Example');
	}
	render(){
		console.log('I am Example render method');
		const obj ={
			name:'Nikunj',
			address:{
				street:'ABC',
				colony:{
					house:'222',
					num:'23'
				}
			}
		}
		const colony = get(obj,'address.colony.house');
		const data = Object.assign({}, obj);
		return(
			<ContextUserProps.Consumer>
				{/* {this.props.name}
				{colony.house}
				<button onClick={this.props.handle}>Example Button</button><br /><br /> */}
				{user=><Context user={user}/>}
			</ContextUserProps.Consumer>
		);
	}
}

Example.propTypes={
}
Example.defaultProps={

}
