//create a new folder on desktop called web dev bootcamp
//cd into web dev bootcamp
//npx create-react-app newsapp
//open newsapp folder in vscode
//npm run start 
//rcc tab
//new terminal --> npm start
//new terminal --> npm install react-router-dom@5.2.0
// npm i react-top-loading-bar
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
import LoadingBar from 'react-top-loading-bar' //https://www.npmjs.com/package/react-top-loading-bar

export default class App extends Component {
  // a = "Charlotte";
  // let {title,description} = this.props;
  state = { progress: 0 }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
      // <div>{this.a}! This App is made using class based component</div> //class component so use this.a
      <>
        <Router>
          <Navbar />
          <LoadingBar color='#f11946' progress={this.state.progress} />
          <Switch>
            <Route exact path="/"> {/*exact path is used to avoid the problem of home page being displayed on every page*/}
              <News setProgress={this.setProgress} country="us" pageSize={12} category="general" key="general" /> {/*passing props and change category here to change content science/business/technology/entertainment/general/health/sports*/}
            </Route>
            <Route exact path="/business">
              <News setProgress={this.setProgress} country="us" pageSize={12} category="business" key="business" /> {/*passing props and change category here to change content science/business/technology/entertainment/general/health/sports*/}
            </Route>
            <Route exact path="/technology">
              <News setProgress={this.setProgress} country="us" pageSize={12} category="technology" key="technology" /> {/*passing props and change category here to change content science/business/technology/entertainment/general/health/sports*/}
            </Route>
            <Route exact path="/science">
              <News setProgress={this.setProgress} country="us" pageSize={12} category="science" key="science" /> {/*passing props and change category here to change content science/business/technology/entertainment/general/health/sports*/}
            </Route>
            <Route exact path="/sports">
              <News setProgress={this.setProgress} country="us" pageSize={12} category="sports" key="sports" /> {/*passing props and change category here to change content science/business/technology/entertainment/general/health/sports*/}
            </Route>
            <Route exact path="/health">
              <News setProgress={this.setProgress} country="us" pageSize={12} category="health" key="health" /> {/*passing props and change category here to change content science/business/technology/entertainment/general/health/sports*/}
            </Route>
            <Route exact path="/entertainment">
              <News setProgress={this.setProgress} country="us" pageSize={12} category="entertainment" key="entertainment" /> {/*passing props and change category here to change content science/business/technology/entertainment/general/health/sports*/}
            </Route>

          </Switch>

        </Router>
        {/* <Navbar /> */}
        {/* <News setProgress={this.setProgress}  country="us" pageSize={12} category="technology" />  */}
        {/*passing props and change category here to change content science/business/technology/entertainment/general/health/sports*/}
      </>
    )
  }
}

