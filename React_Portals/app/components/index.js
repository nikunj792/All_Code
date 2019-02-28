import React from 'react';
import { PropTypes } from 'react';
import FieldSet from 'FieldSet';
// import SetState from 'SetState';

export default class Index extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {

  //   }
  // }

  // render() {
  //   const arr = ['jack', 'tom', 'ella', 'margretta', 'jam']
  //   return (
  //     <div>
  //       <a href="#" onClick={this.handleClick.bind(this)}>Login</a>
  //       {'I am index'}
  //       <FieldSet name={arr} />
  //       {/* <SetState /> */}
  //     </div>
  //   );
  // }

  componentDidMount() {
    document.addEventListener('FBObjectReady', this.initializeFacebookLogin);
  }

  componentWillUnmount() {
    document.removeEventListener('FBObjectReady', this.initializeFacebookLogin);
  }

  /**
   * Init FB object and check Facebook Login status
   */
  initializeFacebookLogin() {
    window.FB = window.FB;
    this.checkLoginStatus();
  }

  /**
   * Check login status
   */
  checkLoginStatus() {
    window.FB.getLoginStatus(this.facebookLoginHandler);
  }

  /**
   * Check login status and call login api is user is not logged in
   */
  facebookLogin() {
    if (!window.FB) return;

    window.FB.getLoginStatus(response => {
      if (response.status === 'connected') {
        this.facebookLoginHandler(response);
      } else {
        window.FB.login(this.facebookLoginHandler, { scope: 'public_profile' });
      }
    });
  }

  /**
   * Handle login response
   */
  facebookLoginHandler(response) {
    if (response.status === 'connected') {
      window.FB.api('/me', userData => {
        // let result = {
        //   ...response,
        //   user: userData
        // };
        debugger;
        // this.props.onLogin(true, result);
      });
    } else {
      // this.props.onLogin(false);
    }
  }

  render() {
    // let { children } = this.props;
    return (
      <div onClick={this.facebookLogin}>
        {/* {children} */}
        <p>Hello</p>
      </div>
    );
  }
}

