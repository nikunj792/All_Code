import React from 'react';
import ReactDOM from 'react-dom';

export default class Voice extends React.Component{
constructor(props){
    super(props);
    this.state={
       input:'',
       value:''
    }
    this.handleMongoDB = this.handleMongoDB.bind(this);
}

handleMongoDB(){
        fetch('http://localhost:3000/getNum',{
            method:'GET'
        }).then(res=>res.json()).then(data=>{
            this.setState({value: data.data.val })})
        .catch(error=>console.log('Error is ', error));
    }

handleVoice(){
    var recognition = new webkitSpeechRecognition();
    var word='';
    recognition.start();
    recognition.handleMongoDB = this.handleMongoDB;
    recognition.onresult = function (e) {
     word = e.results[0][0].transcript;
      document.getElementById("search").value = word;
      document.getElementById("search").value.length >3 && this.handleMongoDB();
      recognition.stop();
    }
}

handleButton(){
    var input = document.getElementById("search").value;
    this.setState({
        input
    })
    this.handleMongoDB()
}

render(){
    return(
        <fieldset>
            <legend>{'Search Over Voice'}</legend>
            <input type="text" id="search" /><br />
            <div className="mic"><img onClick={()=>this.handleVoice()} src="./public/multimedia/microphone.png" width="30px" height="30px" /></div>
            {this.state.value}
        </fieldset>
    );
}
}

ReactDOM.render(<Voice />, document.getElementById('render'));