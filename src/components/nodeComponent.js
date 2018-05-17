import React, { Component } from 'react'

class NodeComponent extends Component {
  state = {
    childrenVisible: false
  }
  handleChildren() {
    const { node } = this.props
    
    if(node.children) {
      return this.renderChildren(node.children)
    }
  }

  renderChildren(children) {
    return children.map((item, index) => (
      <NodeComponent node={item} key={index}/>
    ))
  }

  handleChildrenVisibility() {
    this.setState({childrenVisible: !this.state.childrenVisible})
  }

  render() {
    const { childrenVisible } = this.state
    const { node } = this.props
    const { 
      component,
      description,
      dispatchers,
      id,
      nodeName,
      propTypes,
      subscriptions,
      parent
    } = node
    return (
      <div className="NodeComponent">
        <h3>{nodeName}</h3>
        {node.children && node.children.length && (
          <div className="btn btn-primary" onClick={() => this.handleChildrenVisibility()}>
            Toggle children
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

export default NodeComponent