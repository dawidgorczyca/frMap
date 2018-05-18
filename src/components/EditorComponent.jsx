import React, { Component } from 'react'
import DefinitionsContainer from './../containers/DefinitionsContainer'
import InstancesContainer from './../containers/InstancesContainer'

class EditorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      definitions: true,
    }
  }

  handleDefinitions() {
    this.setState({ definitions: true });
  }

  handleInstances() {
    this.setState({ definitions: false });
  }

  render() { 
    const { definitions } = this.state
    return (
      <div className="EditorComponent">
        <div className={`btn ${definitions ? 'btn--primary' : 'btn--secondary'}`}
          onClick={() => this.handleDefinitions()}
        >
          Definicje
        </div>
        <div className={`btn ${!definitions ? 'btn--primary' : 'btn--secondary'}`}
          onClick={() => this.handleInstances()}
        >
          Instancje
        </div>
        {definitions ? <DefinitionsContainer/> : <InstancesContainer/>}
      </div>
    )
  }
}
 
export default EditorComponent;