import react from 'react';

class Label extends React.Component {
	
	render(){
		return(
			<div>
			{this.props.labelName}
			</div>
		);
	}
}