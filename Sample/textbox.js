import react from 'react';

class TextBox extends React.Component {
	
	render(){
		return(
			<div>
				<input type="text" id={this.props.id} onChange={(e)=>this.props.} />
			</div>
		);
	}
}