import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import Login from './Components/Login'
import Manufacturer from './Components/manufacturer'
import Mainpage from './Mainpage'
import Admin from './Components/SignUp'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
      <div>
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/manufacturer" component={Manufacturer} />
        <Route exact path="/mainpage" component={Mainpage} />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
