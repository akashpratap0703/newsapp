import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
//71567857be1f4570afefafb4b429a4d1
export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <News pageSize={6}/>
      </div>
    )
  }
}

