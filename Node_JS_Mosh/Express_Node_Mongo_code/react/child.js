import React from 'react';
import ReactDOM from 'react-dom';

export default class Child extends React.Component{
    render(){
        return(
            <fieldset>
                <legend>{`Name From Parent is ${this.props.name}`}</legend>
                <legend>{`Age From Parent is ${this.props.age}`}</legend>
            </fieldset>
        )
    }
}