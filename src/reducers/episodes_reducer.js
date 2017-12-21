import {FETCH_EPISODES} from '../actions/index';

export default function(state={}, action){

  switch (action.type) {
    case FETCH_EPISODES:
      return action.payload;
      
    default: return state
  }

}