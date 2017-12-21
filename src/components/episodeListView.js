import React, {Component} from 'react';
import {connect} from 'react-redux';


class EpisodeListView extends Component{

  renderEpisodeList(el, i){
    return (
      <ul key={i} className="episodes__ep">
        <li className="episodes__title">{el.name}</li>
        <li>Säsong: <span>{el.season}</span></li>
        <li>Avsnitt: <span>{el.number}</span></li>
        {(el.image != null) ? <li className="episodes__img-container"><img className="episodes__img" src={el.image.medium} alt={el.name}/></li>: ''}
      </ul>
    )
  }

  render(){
    const {episodes} = this.props;
    return(
      <div className="episodes">
        {episodes.map((el, i) =>this.renderEpisodeList(el, i))}
      </div>
    );
  }  
}
  
  function mapStateToProps({episodes}){
    return{
      episodes
    }
  }
  
export default connect(mapStateToProps)(EpisodeListView);