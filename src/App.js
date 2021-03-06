// // rcc
import React, { Component } from 'react'
import Navbar from './components/layout/Navbar/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import Footer from './components/layout/Footer/Footer'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
export default class App extends Component {

  pageSize = 12;
  // apiKey = process.env.REACT_APP_NEWS_API;
  apikey = "4b9fa583c4aa415b9350c5a3d1219d4e"
  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <div>
        <Router>
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}

          // onLoaderFinished={() => setProgress(0)}
          />
          <Navbar />

          <Switch>


            <Route exact path="/"><News apikey={this.apikey} setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general" /> </Route>
            <Route exact path="/business">  <News apikey={this.apikey} setProgress={this.setProgress} key="business" pageSize={this.pageSize} country="in" category="business" />  </Route>
            <Route exact path="/entertainment">  <News apikey={this.apikey} setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />  </Route>
            <Route exact path="/health">  <News apikey={this.apikey} setProgress={this.setProgress} key="health" pageSize={this.pageSize} country="in" category="health" />  </Route>
            <Route exact path="/science">  <News apikey={this.apikey} setProgress={this.setProgress} key="science" pageSize={this.pageSize} country="in" category="science" />  </Route>
            <Route exact path="/sports">  <News apikey={this.apikey} setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country="in" category="sports" />  </Route>
            <Route exact path="/technology">  <News apikey={this.apikey} setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country="in" category="technology" />  </Route>



          </Switch>
          <Footer />

        </Router>

      </div>
    )
  }
}
