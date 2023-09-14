//create a new folder on desktop called web dev bootcamp
//cd into web dev bootcamp
//npx create-react-app newsapp
//open newsapp folder in vscode
//npm run start 
//rcc tab
//new terminal --> npm start
//new terminal --> npm install react-router-dom@5.2.0
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import logo from './logo.svg';
import './App.css';
// https://v5.reactrouter.com/web/guides/quick-start
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; //npm install react-router-dom: https://v5.reactrouter.com/web/guides/quick-start


export default class App extends Component {
  // a = "Charlotte";
  // let {title,description} = this.props;
  render() {
    return (
      // <div>{this.a}! This App is made using class based component</div> //class component so use this.a
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/"> {/*exact path is used to avoid the problem of home page being displayed on every page*/}
              <News country="us" pageSize={12} category="general" /> {/*passing props and change category here to change content science/business/technology/entertainment/general/health/sports*/}
            </Route>
            <Route exact path="/business">
              <News country="us" pageSize={12} category="business" /> {/*passing props and change category here to change content science/business/technology/entertainment/general/health/sports*/}
            </Route>
            <Route exact path="/technology">
              <News country="us" pageSize={12} category="technology" /> {/*passing props and change category here to change content science/business/technology/entertainment/general/health/sports*/}
            </Route>
            <Route exact path="/science">
              <News country="us" pageSize={12} category="science" /> {/*passing props and change category here to change content science/business/technology/entertainment/general/health/sports*/}
            </Route>
            <Route exact path="/sports">
              <News country="us" pageSize={12} category="sports" /> {/*passing props and change category here to change content science/business/technology/entertainment/general/health/sports*/}
            </Route>
            <Route exact path="/health">
              <News country="us" pageSize={12} category="health" /> {/*passing props and change category here to change content science/business/technology/entertainment/general/health/sports*/}
            </Route>
            <Route exact path="/entertainment">
              <News country="us" pageSize={12} category="entertainment" /> {/*passing props and change category here to change content science/business/technology/entertainment/general/health/sports*/}
            </Route>

          </Switch>

        </Router>
        {/* <Navbar /> */}
        {/* <News country="us" pageSize={12} category="technology" />  */}
        {/*passing props and change category here to change content science/business/technology/entertainment/general/health/sports*/}
      </>
    )
  }
}

