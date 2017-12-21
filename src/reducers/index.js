import { combineReducers } from 'redux';

import serieReducer from './serie_reducer';
import episodesReducer from './episodes_reducer';

const rootReducer = combineReducers({
  serie: serieReducer,
  episodes: episodesReducer

});

export default rootReducer;
