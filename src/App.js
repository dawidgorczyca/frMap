import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { nodeActionCreators } from './store/actions/node'
import './App.css'
import NodeComponent from './components/nodeComponent'

class App extends Component {

  componentWillMount() {
    this.initialize()
  }

  initialize() {
    const { actions } = this.props
    const { initialize } = actions
    initialize()
  }
  
  renderNodes() {
    const { nodes } = this.props;
    return nodes.map((item, index) => {
      if(!item.parent) {
        return (
          <NodeComponent node={item} key={index}  />
        )
      }
    })
  }

  render() {
    return (
      <div className="App">
        {this.renderNodes()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.nodeReducer
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(nodeActionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
