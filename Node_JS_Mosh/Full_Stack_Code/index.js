import React from 'react';
import ReactDOM from 'react-dom';

export default class Stack extends React.Component{
render(){
    return(
        <fieldset>
            <legend>{'Code From Stratch'}</legend>
        </fieldset>
    );
}
}

ReactDOM.render(<Stack />, document.getElementById('render'));