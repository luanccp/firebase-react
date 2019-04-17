import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';


class App extends Component {
  
  constructor(){
    super();
    this.state = {
      speed: 15
    };
  }
  
  // componentDidMount(){
  //   const rootRef = firebase.database().ref().child('react');
  //   const speedRef = rootRef.child('speed');
  //   speedRef.on('value', snap => {
  //     this.setState({
  //       speed:snap.val()
  //     });
  //   });
  // }
  
  render() {
    return (
      <div className="App">
        <h2>{this.state.speed}Luan</h2>
      </div>
    );
  }
}

export default App;
