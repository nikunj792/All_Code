import React from 'react';
import {PropTypes} from 'react';

const ContextUserProps = React.createContext('Nikunj');
export default function Context(props){	
		return(
			<div>
				{'I am Context Component'}
				{props.user}
			</div>
		);
}
