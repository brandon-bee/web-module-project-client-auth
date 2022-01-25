import React from "react";
import axios from "axios";

class Login extends React.Component {
  state = {
    credentials: {
      username:"",
      password:""
    }
  };
  
  handleChange = e => {
    this.setState({
      credentials:{
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    axios.post('http://localhost:9000/api/login', this.state.credentials, { username:"Bloom", password:"Tech" })
      .then(resp => {
        localStorage.setItem("token", resp.data.token);
        this.props.history.push("/friends");
      })
      .catch(err => {
        console.log(err);
      })
  };

  render() {
    return(
      <div>
        <h1>Login</h1>
        <form onSubmit={this.login}>
          <div className="label">
            <label>Username:</label>
          </div>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <div className="label">
            <label>Password:</label>
          </div>
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <div>
            <button>SUBMIT</button>
          </div>
        </form>
      </div>
    );
  };
};

export default Login;