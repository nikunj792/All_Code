import React from "react";
import { render } from "react-dom";
import Error from './error';
import CheckError from './checkError';

export default class ComponentError extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
            {'I am Using the Error Boundries'}
            <Error>
                <CheckError />
            </Error>
        </div>

      );
    }
  }


render(<ComponentError />, document.getElementById("app"));