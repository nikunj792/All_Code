import React from 'react';
import ReactDOM from 'react-dom';
import {PropTypes} from 'react';

const appRoot = document.getElementById('sample');
class Portal extends React.Component{

	constructor(props){
		super(props);
		this.el = document.createElement('span')
	}

	componentDidMount() {
		// The portal element is inserted in the DOM tree after
		// the Modal's children are mounted, meaning that children
		// will be mounted on a detached DOM node. If a child
		// component requires to be attached to the DOM tree
		// immediately when mounted, for example to measure a
		// DOM node, or uses 'autoFocus' in a descendant, add
		// state to Modal and only render the children when Modal
		// is inserted in the DOM tree.
		appRoot.appendChild(this.el);
	  }

	render(){
	const data = this.props.name;
	return ReactDOM.render(
	<fieldset>
		<legend>{'I am Portal Component'}</legend>		
		<div>{data}</div>
	</fieldset>,
	this.el,
	);
	}
}

export default Portal;