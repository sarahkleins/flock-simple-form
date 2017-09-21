import React, { Component } from 'react';

class SimpleForm extends Component {
  constructor(){
    super();

    this.state = {
      userEmail: '',
      userPassword: '',
      userPasswordConfirmation: ''
    }
  }

  render(){
    return(
      <form>
        <label>
          Email:
          <input
            name="userEmail"
            type="text"
          />
        </label>
        <label>
          Password:
          <input
            name="userPassword"
            type="password"
          />
        </label>
        <label>
          Confirm Password:
          <input
            name="userPasswordConfirmation"
            type="password"
          />
        </label>
      </form>
    );
  }
}

export default SimpleForm;