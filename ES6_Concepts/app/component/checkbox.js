import React from 'react';
import PropTypes from 'prop-types';

export default class Checkbox extends React.Component{
	constructor(props){
		super(props);
		
	}
	render(){
		
		return (
				<div>
					<input type="checkbox" />{this.props.label}
				</div>
			)
	}
}

Checkbox.propTypes={
	label:PropTypes.string.isRequired
};
Checkbox.defaultProps={
	label:'Sample'
};