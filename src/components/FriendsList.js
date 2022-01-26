import React from "react";
import axios from "axios";

class FriendsList extends React.Component {
  state = {
    friends:[]
  };

  componentDidMount() {
    const token = localStorage.getItem("token");

    axios.get("http://localhost:9000/api/friends", {
      headers:{
        authorization:token
      }
    })
      .then(resp => {
        this.setState({
          friends:resp.data
        });
        console.log(this.state)
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return(
      <div>
        <h2>FRIENDS LIST</h2>
        {
          this.state.friends.map(friend => (
            <div key={friend.id}>
              <p>Name: {friend.name} - Email: {friend.email}</p>
            </div>
          ))
        }
      </div>
    )
  }
}

export default FriendsList;