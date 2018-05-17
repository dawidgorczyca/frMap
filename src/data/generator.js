import { store } from './../store/store'
import AppInstance from './instances'
import { nodeActionCreators } from './../store/actions/node'

const uuidv4 = require('uuid/v4')

export const structureFactory = (function() {
  const generateBlock = function(node, parentId) {
    const { addNode } = nodeActionCreators;
    const { children } = node;

    const nodeId = uuidv4();
    const nodeObject = {
      ...node,
      nodeId: nodeId
    }
    
    if(parentId) {
      nodeObject.parent = parentId;
    }
    store.dispatch( addNode(nodeObject) )

    if( children && children.length ) {
      children.forEach(element => {
        generateBlock( element, nodeId )
      })
    } else {
      return 'ERROR - Attribute \'children\' required'
    }
  };

  return generateBlock;
})();