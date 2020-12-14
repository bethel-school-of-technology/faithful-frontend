import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import '../App.css';

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      message: null,
      redirect: null
    };
  }


    handleInputChange = (event) => {
      const { value, name } = event.target;
      this.setState({
        [name]: value
      });
  }

   onSubmit = (e) => {
      e.preventDefault();

      const createUser = async () => {
        let userData = await fetch('http://localhost:3001/login/signup', {
          method: 'POST',
          body: JSON.stringify(this.state),
          headers: {
            'Content-Type': 'application/json'
          }
        });

        let user = await userData.json();
        this.setState({ message: user.message });
        setTimeout(() => { this.setState({ redirect: user.url }); }, 2000);


      }

      createUser();

  }




  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />   
    } 
    if (this.state.message) {
      return <h2 style={{ justifyContent: 'center' }}>
        {this.state.message}
            </h2>
    }
  return (
    <form className="loginForm" onSubmit={this.onSubmit}>
        <h1>Sign Up Here!</h1>
            <input 
              className='input'
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleInputChange}
              required
            />
            <input
              className='input'
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleInputChange}
              required
            />   
            <input 
              className='submitButton'
              type="submit"
              value="Submit" />        
    </form>
    
  )};
  }

export default SignUp;