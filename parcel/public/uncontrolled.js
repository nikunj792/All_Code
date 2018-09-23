import React from "react";
import { render } from "react-dom";
import isEmpty from 'lodash';
import isUndefined from 'lodash';
import isNull from 'lodash';

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.input = React.createRef();
      this.value = React.createRef();
    }
  
    handleSubmit(event) {
    //   alert('A name was submitted: ' + this.input.current.value);
    var val;
    let text ="Nikunj"
    if(isNull(val) || isNull(text)){
        console.log('inside the conditioin', val);
    }
      
      console.log('bbbbbbbbbbb', this.value.current.value);
      event.preventDefault();
    }

  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name:
            <input type="text" ref={this.input} defaultValue="sdsdsadasd" />
          </label>
          <label>
            Last Name:
            <input type="text" ref={this.value} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  
render(<NameForm />, document.getElementById("app"));