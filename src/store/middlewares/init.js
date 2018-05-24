import { BaseComponentInstance } from "./../../data/instances";
import { structureFactory } from "./../../data/generator";
import { nodeActionNames } from "./../actions/node";

export const init = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === nodeActionNames.INITIALIZE_NODES) {
    structureFactory(BaseComponentInstance);
  }
};
