import React from 'react';
import ReactDOM from 'react-dom';
import isEmpty from 'lodash';

export default class Child extends React.Component{
    constructor(props){
        super(props);
        this.state={
            collection:[]
        }
    }
    handleFetch(){
        fetch('http://localhost:3000/get',{
            method:'GET'
        })
        .then(collection=>collection.json())
        .then(res=>this.setState({
            collection:res
        }))
        .catch(error=>console.log('Child Error is ', error));
    }
    render(){
        const arr = this.state.collection;
        return(
            <fieldset>
                <legend>{`Name From Parent is ${this.props.name}`}</legend>
                <legend>{`Age From Parent is ${this.props.age}`}</legend>
                <button onClick={()=>this.handleFetch()}>Fetch</button>
                <legend>{`Fetched Value is`}</legend>
                {isEmpty(arr) ? arr.map((item,index)=><li key={index}>{item.name}</li>):'Not Fetched'}
            </fieldset>
        )
    }
}