import React from 'react';
import Portal from 'Portal';

handleObserver=()=>{
console.log('11111', this.props.handler)
}
function FieldSet(props){
	const data = props.name;
	return(
		<fieldset>
			<button onCLick={()=>this.handleObserver()}>Observable Button</button>
		<legend>{'I am FieldSet Component'}</legend>
		{data.map((item,index)=><ul key={index}>{item}</ul>)}
		<Portal			
			name="Nikunj"
		/>
		</fieldset>
	);
}

export default FieldSet;