import {FETCH_SERIE, ERROR, FETCHING} from '../actions/index';


const initialState={
  serieName: '',
  error: false,
  loading: false
}
export default function(state= initialState, action){

  switch (action.type) {
    case FETCHING:
      return{
       loading: true
      }

    case FETCH_SERIE:
      return { serieName:action.payload};

    case ERROR:
      return {error:action.error, serieName:''};

    default: 
      return state;
  }


}
