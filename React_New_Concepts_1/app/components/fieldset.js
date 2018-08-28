import React from 'react';
import {PropTypes} from 'react';
import Portal from 'Portal';

function FieldSet(props){
	const data = props.name;
	return(
		<fieldset>
		<legend>{'I am FieldSet Component'}</legend>
		{data.map((item,index)=><ul key={index}>{item}</ul>)}
		<Portal			
			name="Nikunj"
		/>
		</fieldset>
	);
}

export default FieldSet;