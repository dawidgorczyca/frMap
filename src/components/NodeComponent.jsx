import React, { Component } from 'react'
import PropTypes from 'prop-types'

class NodeComponent extends Component {
  state = {
    childrenVisible: false
  }

  componentWillMount() {
    this.handleGlobalVisibility(this.props.globalVisibility)
  }

  componentWillReceiveProps(nextProps) {
    this.handleGlobalVisibility(nextProps.globalVisibility)
  }

  handleGlobalVisibility(visibility) {
    this.setState({ childrenVisible: visibility })
  }

  handleChildren() {
    const { node } = this.props
    
    if(node.children) {
      return this.renderChildren(node.children)
    }
  }

  renderChildren(children) {
    const { globalVisibility } = this.props
    return children.map((item, index) => <NodeComponent
      node={item}
      key={index}
      globalVisibility={globalVisibility}
    />)
  }

  handleChildrenVisibility() {
    this.setState({childrenVisible: !this.state.childrenVisible})
  }

  handleNodeAttribute(attribute) {
    let output
    if(Array.isArray(attribute)) {
      output = attribute.map((item, index) => <span
        className="pill pill--primary"
        key={index}>
          {item}
        </span>)
    } else {
      output = attribute
    }
    return output
  }

  handleDetail(attribute) {
    const attr = this.props.node[attribute]
    let output

    if(attr && attr.length) {
      output = <li>
        <span className="text--faded">
          {attribute}:
        </span> {this.handleNodeAttribute(attr)}
      </li>
    }
    return output
  }

  render() {
    const { childrenVisible } = this.state
    const {
      node
    } = this.props
    const { 
      nodeName,
      description
    } = node
    return (
      <div className="NodeComponent">
        <h3>{nodeName}</h3>
        <div className="NodeComponent__content">
          <ul className="NodeComponent__details">
            {this.handleDetail('component')}
            {this.handleDetail('propTypes')}
            {this.handleDetail('dispatchers')}
            {this.handleDetail('subscriptions')}
          </ul>
          <div className="NodeComponent__description">
            {description}
          </div>
        </div>
        {node.children && node.children.length && (
          <div className="btn btn--bordered" onClick={() => this.handleChildrenVisibility()}>
            {childrenVisible ? 'Schowaj dzieci' : 'Pokaż dzieci'}
          </div>
        )}
        <br />

        {childrenVisible && (
          <div className="NodeComponent__children">
            {this.handleChildren()}
          </div>
        )}
      </div>
    )
  }
}

NodeComponent.propTypes = {
  node: PropTypes.object.isRequired,
  globalVisibility: PropTypes.bool.isRequired
}

export default NodeComponent