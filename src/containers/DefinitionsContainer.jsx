import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { definitionsActionCreators } from './../store/actions/definitions'

import DefinitionComponent from './../components/DefinitionComponent'

class DefinitionsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
    this.handleDefinitionChange = this.handleDefinitionChange.bind(this)
  }

  handleDefinitionChange(event) {
    const { editDefinition } = this.props.actions
    editDefinition(
      event.target.name,
      event.target.value,
      event.target.getAttribute('definition_id')
    )
  }

  renderDefinitions() {
    const { definitions } = this.props
    let output
    if( definitions && definitions.length ) {
      output = definitions.map((item, index) => (
        <DefinitionComponent
          definition={item}
          key={index}
          onChange={this.handleDefinitionChange}
        />
      ))
    }
    return output
  }

  render() { 
    return (
      <div className="DefinitionsContainer">
        Definitions
        {this.renderDefinitions()}
      </div>
    )
  }
}

DefinitionsContainer.propTypes = {
  definitions: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  return state.definitionsReducer
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(definitionsActionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DefinitionsContainer)