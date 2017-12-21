import React, {Component} from 'react';
import {connect} from 'react-redux';
import EpisodeListView from './episodeListView';
import ErrorMessage from './errorMessage';


class SerieInfo extends Component{

  render(){
    const {episodes, serie} = this.props;

    return(
        <div className="info">
          <h1 className="info__title">{serie.serieName.name}</h1>
          {(Object.keys(episodes).length !== 0)? <EpisodeListView/> : <ErrorMessage msg='Inga episoder hittades'/> }
        </div>
    );
  }

}

function mapStateToProps({serie, episodes}){
  return{
    serie,
    episodes
  };
}

export default connect(mapStateToProps)(SerieInfo);