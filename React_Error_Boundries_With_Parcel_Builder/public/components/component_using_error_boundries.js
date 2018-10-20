import React from "react";
import { render } from "react-dom";
import Error from './error';
import CheckError from './checkError';
import NoError from './normal';

export default class ComponentError extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
            <Error>
                <CheckError />
            </Error>
            <NoError />
        </div>

      );
    }
  }


render(<ComponentError />, document.getElementById("app"));