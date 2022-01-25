import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Login from "./components/Login";

function App() {

  return (
    <Router>
      <div className="App">
        <h2>FRIENDS DATABASE</h2>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/login" component={Login}>
          </Route>
          <Route exact path="/" component={Login}>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
