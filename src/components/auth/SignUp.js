import React, { Component } from 'react';

class SignUp extends Component {

  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h5>Sign in</h5>
          <div className="input-field">
            <label htmlFor="firstName">First name</label>
            <input type="text" name="firstName" id="firstName" onChange={this.handleInputChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last name</label>
            <input type="text" name="lastName" id="lastName" onChange={this.handleInputChange} />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" onChange={this.handleInputChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" onChange={this.handleInputChange} />
          </div>
          <div className="input-field">
            <button className="btn">Sign up</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignUp;
