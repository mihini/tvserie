import {FETCH_SERIE} from '../actions/index';
import {ERROR} from '../actions/index';


const initialState={
  serieName: '',
}
export default function(state= initialState, action){

  switch (action.type) {

    case FETCH_SERIE:
      console.log(action.payload);
      return action.payload;

    case ERROR:
      return [...state];

    default: return state
  }


}
