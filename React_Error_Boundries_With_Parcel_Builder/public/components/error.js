import React from "react";

export default class ErrorBoundries extends React.Component {
    constructor(props) {
      super(props);
      this.state={
          error:null,
          errorInfo:null
      }
    }
  
    componentDidCatch(error, errorInfo){
        this.setState({
            error,
            errorInfo
        })
    }
    
    render() {
        if(this.state.errorInfo){
      return (
        <div>
            {'I am Error Boundries, and you are wrong'}
            {this.state.error && this.state.error.toString()}
        </div>
      );
        }
        return this.props.children
    }
  }

  