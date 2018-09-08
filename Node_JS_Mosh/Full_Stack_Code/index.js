import React from 'react';
import ReactDOM from 'react-dom';

export default class Stack extends React.Component{
constructor(props){
    super(props);
    this.state={
        data:'Default',
        input:0,
        postValue:''
    }
    this.handleInput= this.handleInput.bind(this);
}

handleClick(){
        fetch('http://localhost:3000/getNum',{
            method:'GET'
        }).then(res=>res.json()).then(data=>this.setState({data: data.data[0].intNumber}))
        .catch(error=>console.log('Error is ', error));
    }

handleInput(e){
    this.setState({
        input:e.target.value
    })
}

handleInputButton(){
    fetch('http://localhost:3000/postNum',{
        method:"POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(this.state)
    }).then(res=>res.json())
        .then(res=>this.setState({postValue: res.value}))
        .catch(error=>console.log('Error is ', error));
}

render(){
    return(
        <fieldset>
            <legend>{'Code From Stratch!!!'}</legend>
            <input type="text" onChange={(e)=>this.handleInput(e)} />
            <button onClick={()=>this.handleClick()}>Click GET</button>
            <button onClick={()=>this.handleInputButton()}>Click POST</button>
            {this.state.data}<br />
            {`Posted Value is ${this.state.postValue}`}
        </fieldset>
    );
}
}

ReactDOM.render(<Stack />, document.getElementById('render'));