import React from "react";

export default class ErrorBoundries extends React.Component {
    constructor(props) {
      super(props);
      this.state={
          flag:false
      }
    }
  
    componentDidCatch(error, info){
        this.setState({
            flag: true
        })
    }
    
    render() {
        if(this.state.flag){
      return (
        <div>{'I am Error Boundries, and you are wrong'}</div>
      );
        }
        return 'No Error'
    }
  }

  