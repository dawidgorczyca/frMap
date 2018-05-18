import React from 'react';

const DefinitionComponent = (props) => {
  return (
    <div className="DefinitionComponent">
      <input
        type="text"
        name='name'
        definition_id={props.definition.id}
        value={props.definition.name}
        onChange={(event) => props.onChange(event)}
      />
    </div>
  )
}
 
export default DefinitionComponent;