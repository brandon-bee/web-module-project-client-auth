import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";
import Logout from "./components/Logout";
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <h2>FRIENDS DATABASE</h2>
        <ul>
          <li>
            <Link to="/login">LOGIN</Link>
          </li>
          <li>
            <Link to="/friends">FRIENDLIST</Link>
          </li>
          <li>
            <Link to="/friends/add">ADDFRIEND</Link>
          </li>
          <li>
            <Link to="/logout">LOGOUT</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/logout" component={Logout} />
          <PrivateRoute path="/friends/add" component={AddFriend} />
          <PrivateRoute path="/friends" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
