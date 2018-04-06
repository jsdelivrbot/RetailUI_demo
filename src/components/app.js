import React, { Component } from 'react';
import Header from './header';
import SideBar from './side_bar';
//import SimpleMap from './google_map';


export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SideBar />
        
        </div>
    );
  }
}
