import React from 'react';
import ReactDOM from 'react-dom';

export default class Stack extends React.Component{
constructor(props){
    super(props);
    this.state={
        data:'Default',
        fname:'',
        lname:'',
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
        [e.target.name]:e.target.value
    })
}

handleInputButton(){
    const data ={
    firstName: this.state.fname,
    lastName: this.state.lname    
    };

    fetch('http://localhost:3000/postNum',{
        method:"POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(data)
    }).then(res=>res.json())
        .then(res=>console.log(res))
        .catch(error=>console.log('Error is ', error));
}

render(){
    return(
        <fieldset>
            <legend>{'First Name'}</legend>
            <input type="text" id="fname" name="fname" onChange={(e)=>this.handleInput(e)} />
            <label for="lname">Last Name</label>
            <input type="text" name="lname" id="lname" onChange={(e)=>this.handleInput(e)} />
            <button onClick={()=>this.handleClick()}>Click GET</button>
            <button onClick={()=>this.handleInputButton()}>Click POST</button>
            {this.state.data}<br />
            {`Posted Value is ${this.state.postValue}`}
        </fieldset>
    );
}
}

ReactDOM.render(<Stack />, document.getElementById('render'));