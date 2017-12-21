import axios from 'axios';

const rootURL = 'http://api.tvmaze.com/singlesearch/shows?q=';
const showURL = 'http://api.tvmaze.com/shows/';

export const FETCH_SERIE = 'FETCH_SERIE';
export const FETCH_EPISODES = 'FETCH_EPISODE';
export const ERROR = 'ERROR';
export const FETCHING = 'FETCHING';

export function fetchSerieData(serieName){
  const URL = `${rootURL}${serieName}`;

  // const request = axios.get(URL);
  // return{
  //  type: FETCHING,
  //  payload: request
  // }
  return (dispatch)=>{

    axios.get(URL).then((response)=>{
      console.log(response.status);
      dispatch(sendSerieData(response));
      
      const id = response.data.id;
      const episodesURL = `${showURL}${id}/episodes`;
      axios.get(episodesURL).then((response)=>{
        dispatch(sendEpisodeData(response));
      });
    });
  }
}

export function sendSerieData(response){
  return{
    type: FETCH_SERIE,
    payload: response.data
  }
}

export function sendEpisodeData(response){
  return{
    type: FETCH_EPISODES,
    payload: response.data
  }
}

export function sendErrorMessage(){
  return{
    type:ERROR,
    error: true
  }

}

