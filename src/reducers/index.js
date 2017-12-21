import { combineReducers } from 'redux';

import serieReducer from './serie_reducer';
import episodesReducer from './episodes_reducer';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  serie: serieReducer,
  episodes: episodesReducer

});

export default rootReducer;
