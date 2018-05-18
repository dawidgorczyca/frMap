import React, { Component } from 'react';

import * as instances from './../data/instances';

class InstancesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  componentWillMount() {
    const inst = JSON.parse(JSON.stringify(instances))
    delete inst.default
    console.log(inst)
  }
  render() { 
    return (
      <div className="InstancesContainer">
        Instances
      </div>
    )
  }
}
 
export default InstancesContainer;