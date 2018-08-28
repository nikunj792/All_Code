import React from 'react';
import PropTypes from 'prop-types';

export default class Sample extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			
		}
	}

	render(){
		return (
				<div className="container">
					<nav className="nav">
						<ul>
							<li><a href="#">Home</a></li>
							<li><a href="#">About</a></li>
							<li><a href="#">Contact</a></li>
						</ul>
					</nav>
				</div>
			);    
	}
}

Sample.propTypes={};
Sample.defaultProps={};