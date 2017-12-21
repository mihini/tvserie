import React, {Component} from 'react';
import {connect} from 'react-redux';
import EpisodeListView from './episodeListView';


class SerieInfo extends Component{

  render(){
    const {episodes, serie} = this.props;

    return(
        <div>
          <h1>{serie.name}</h1>
          {(Object.keys(episodes).length !== 0)? <EpisodeListView/> : '' }
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