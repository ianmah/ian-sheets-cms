import React, { Component } from "react";
import "./App.css";
import Posts from "./components/Posts";
import SocialMedia from "./components/SocialMedia";

class App extends Component {
  constructor(){
    super();
    this.state = {
      links: [
        {
          url: 'https://www.linkedin.com/in/ianmah/',
          icon: 'linkedin',
          library: 'brands'
        },
        {
          url: 'https://github.com/ianmah/',
          icon: 'github',
          library: 'brands'
        },
        {
          url: 'mailto:ianmmah@gmail.com',
          icon: 'envelope',
          library: 'solid'
        }
      ]
    }
  }

  render() {

    return (
      <div className="App">
        <div className="Header">
          <div className="left">
            <h1 className="App-title">Ian Mah</h1>
            <SocialMedia links={this.state.links}/>
          </div>
          <div className="right">
            <h2 className="Sub-title">Aspiring Developer, Marketing Director, Photography Enthusiast</h2>
          </div>
        </div>
        <Posts />
      </div>
    );
  }
}
export default App;
