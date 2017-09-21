import React, { Component } from 'react';
import Icon from './Icon.js';

class SimpleForm extends Component {
  constructor(){
    super();

    this.state = {
      userEmail: '',
      userPassword: '',
      userPasswordConfirmation: '',
      isEmailValid: false,
      isPasswordValid: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateFields = this.validateFields.bind(this);
  }

  validateFields(inputName, value){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    switch(inputName){
      case 'userEmail':
        re.test(value) ? this.setState({ isEmailValid: true }) : this.setState({ isEmailValid: false });
        break;
      case 'userPassword':
        /* validate password here*/
        break;
      default:
        break;
    }
  }

  handleChange(event){
    let value = event.target.value;
    let inputName = event.target.name;

    this.setState({
      [inputName]: value
    }, () => {
      this.validateFields(inputName, value);
    });
  }

  handleSubmit(event){
    /* scaffold for handleSubmit */
    /* return error if email is invalid or passwords do not match*/
  }

  render(){
    const { isEmailValid } = this.state;

    return(
      <form className="form-container" onSubmit={ this.handleSubmit }>
        <label>
          Email:
          <div className="block mb-4">
            {isEmailValid ? <Icon styles="fa fa-check-circle fa-lg icon-green" text="Hooray, valid email!" /> : <Icon styles="fa fa-times-circle fa-lg icon-red" text="Please input a valid email." />}
          </div>
          <input
            className="w-full mb-8 input-md"
            name="userEmail"
            type="text"
            value={ this.state.userEmail }
            onChange={ this.handleChange }
          />
        </label>
        <label>
          Password:
          <input
            className="w-full mb-8 input-md"
            name="userPassword"
            type="password"
            value={ this.state.userPassword }
            onChange={ this.handleChange }
          />
        </label>
        <label>
          Confirm Password:
          <input
            className="w-full mb-8 input-md"
            name="userPasswordConfirmation"
            type="password"
            value={ this.state.userPasswordConfirmation }
            onChange={ this.handleChange }
          />
        </label>
        <input className="btn btn-blue" type="submit" value="Submit" />
      </form>
    );
  }
}

export default SimpleForm;