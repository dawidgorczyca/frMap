import React, { Component } from 'react'
import './styles/main.css'

import NodesContainer from './containers/NodesContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NodesContainer /> 
      </div>
    );
  }
}

export default App