import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { nodeActionCreators } from './../store/actions/node'

import NodeComponent from './../components/NodeComponent'
import EditorComponent from './../components/EditorComponent'

class NodesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      globalVisibility: false,
      editVisbility: false
    }
  }
  componentWillMount() {
    this.initialize()
  }

  initialize() {
    const { actions } = this.props
    const { initialize } = actions
    initialize()
  }
  
  renderNodes() {
    const { globalVisibility } = this.state
    const { nodes } = this.props
    return nodes.map((item, index) => {
      if(!item.parent) {
        return (
          <NodeComponent
            node={item}
            key={index}
            globalVisibility={globalVisibility}
          />
        )
      } else {
        return null
      }
    })
  }

  handleGlobalVisibility() {
    this.setState({ globalVisibility: !this.state.globalVisibility })
  }

  handleEditVisibility() {
    this.setState({ editVisbility: !this.state.editVisbility })
  }

  render() {
    const { globalVisibility, editVisbility } = this.state
    const btnGlobalLabel = globalVisibility ? 'Zwiń Komponenty' : 'Rozwiń Komponenty'
    const btnEditLabel = editVisbility ? 'Ukryj edytor' : 'Pokaż edytor'
    return (
      <div className="NodesContainer">
        <div
          className="btn btn--primary"
          onClick={() => this.handleGlobalVisibility()}>
            {btnGlobalLabel}
        </div>
        <div className="btn btn--primary"
          onClick={() => this.handleEditVisibility()}
        >
          {btnEditLabel}
        </div>
        {editVisbility && <EditorComponent/>}
        {this.renderNodes()}
      </div>
    );
  }
}

NodesContainer.propTypes = {
  nodes: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  return state.nodeReducer
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(nodeActionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NodesContainer)