import React, { Component } from 'react';
import './App.css';
import Button from './components/Button'

class App extends Component{
  render(){
    return(
      <div className="App">
        <div className="Button">
          <Button />
        </div>
      </div>
    )
  }
}
export default App;
