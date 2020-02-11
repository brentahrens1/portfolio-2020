import React, { Component } from 'react';
import './App.css';

import Navigation from './components/Navigation/Navigation';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

class App extends Component {
  state = {
    sideDrawerOpen: false,
  }

  drawerToggleClickHandler = () => {
     this.setState((prevState) => {
       return {sideDrawerOpen: !prevState.sideDrawerOpen}
     })
  }

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
       backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div className="App" style={{height: '100%'}}>
        <div id="home">
          <Navigation drawerToggleClickHandler={this.drawerToggleClickHandler}/>
          <SideDrawer show={this.state.sideDrawerOpen} click={this.backdropClickHandler} />
          {backdrop}
        </div>
          <About />
          <Projects />
          <hr/>
        <div id="contact">
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;