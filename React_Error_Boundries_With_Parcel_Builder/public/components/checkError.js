import React from "react";

export default class CheckError extends React.Component {
    constructor(props) {
      super(props);
      this.state={
          counter:0,
          flag: false
      }
    }
  
    handleClick(){
        const counter = this.state.counter;
        //Setting the state using functional approach, this way state will be more predictable.
        this.setState((prevState,props)=>{
            return prevState.counter = prevState.counter+1}
        )
    }
    render() {
        if (this.state.counter === 5) {
            throw new Error('I crashed!');
          }
      return (
        <div>
            {this.state.counter}
            <button onClick={()=>this.handleClick()}>Click</button>
        </div>
      );
    }
  }

  