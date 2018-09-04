import React from 'react';
import ReactDOM from 'react-dom';
import Child from 'Child';

export default class Math extends React.Component{
    constructor(props){
        super(props);
        this.state={
            fname:'Default Value',
            age:15
        }
    }
    handleInput(e){
        this.setState({
            fname:e.target.value
        })
    }
    handleButton(){
        const val = this.state;
        fetch('http://localhost:3000/post',{
            method:'POST',
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body:JSON.stringify(val)
        })
        .then((result)=>result.json())
        .then(data=>this.setState({
            fname: data.name,
            age:data.age
        }))
        .catch((error)=>{
            console.log(`Error is ${error}`)
        });
    }
    render(){
        return(
            <fieldset>
                <legend>{'First Name'}</legend>
                <input type="text" onChange={(e)=>this.handleInput(e)}/>
                <legend><button onClick={()=>this.handleButton()}>Submit</button></legend>
                <legend><Child name={this.state.fname} age={this.state.age} /></legend>
            </fieldset>
        )
    }
}

ReactDOM.render(<Math />, document.getElementById('parent'));