import React from 'react';
import MainPage from './Mainpage'
import Login from './Components/Login'
import Signup from './Components/SignUp'
import Manufacturer from './Components/manufacturer'

const name = 'DELL';
export default class App extends React.Component {
  constructor(props)
  {
    super(props);
  }
  render() {
    return (
      <div>
        {/* <Manufacturer companyname={name} /> */}
        <Signup />
      </div>
    );
  }
}