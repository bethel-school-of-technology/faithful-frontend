import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import '../App.css';


class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      message: null,
      redirect: null,
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

      const authenticateUser = async () => {
        let usersData = await fetch('http://localhost:3001/login/signin', {
          method: 'POST',
          body: JSON.stringify(this.state),
          headers: {
            'Content-Type': 'application/json'
          }
        }); 

        let users = await usersData.json();
        this.setState({ message: users.message });
        setTimeout(() => { this.setState({ redirect: users.url }); }, 2000)
      

      }

      authenticateUser();
      

  }



  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />   
    } 
    if (this.state.message) {
      return <div>
        {this.state.message}
            </div>
    }
      return (
          <form className="loginForm" onSubmit={this.onSubmit}>
              <h1>Login Below!</h1>
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
                  <input className='submitButton'
                        type="submit"
                        value="Submit" />        
          </form>
          
      );
    }
}





export default SignIn;