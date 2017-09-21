import React, { Component } from 'react';

class SimpleForm extends Component {
  constructor(){
    super();

    this.state = {
      userEmail: '',
      userPassword: '',
      userPasswordConfirmation: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    let value = event.target.value;
    let inputName = event.target.name;

    this.setState({
      [inputName]: value
    });
  }

  render(){
    return(
      <form>
        <label>
          Email:
          <input
            name="userEmail"
            type="text"
            value={ this.state.userEmail }
            onChange={ this.handleChange }
          />
        </label>
        <label>
          Password:
          <input
            name="userPassword"
            type="password"
            value={ this.state.userPassword }
            onChange={ this.handleChange }
          />
        </label>
        <label>
          Confirm Password:
          <input
            name="userPasswordConfirmation"
            type="password"
            value={ this.state.userPasswordConfirmation }
            onChange={ this.handleChange }
          />
        </label>
      </form>
    );
  }
}

export default SimpleForm;