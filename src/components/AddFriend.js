import React from "react";
import axios from "axios";

class AddFriend extends React.Component {
  state = {
    name:"Joe",
    email:"joe@lambdaschool.com"
  };

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    const token = localStorage.getItem("token");
    e.preventDefault();
    axios.post("http://localhost:9000/api/friends", this.state, {
      headers:{
        authorization:token
      }
    })
      .then(resp => {
        this.props.history.push("/friends");
      })
      .catch(err => {
        console.log(err);
      })
  };

  render() {
    return(
      <div>
        <h2>ADD FRIEND</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="label">
            <label>FRIEND NAME:</label>
          </div>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <div className="label">
            <label>FRIEND EMAIL:</label>
          </div>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <div>
            <button>SUBMIT</button>
          </div>
        </form>
      </div>
    )
  }
}

export default AddFriend;