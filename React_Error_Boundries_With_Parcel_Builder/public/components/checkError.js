import React from "react";

export default class CheckError extends React.Component {
    constructor(props) {
      super(props);
      this.state={
          flag:false
      }
    }
  
    handleClick(){
        this.setState({
            flag: true
        })
    }
    render() {
      return (
        <div>
            {'I am check error'}
            <button onClick={()=>this.handleClick()}>Click</button>
        </div>
      );
    }
  }

  