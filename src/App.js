import React, { Component } from 'react';
import {connect} from 'react-redux';
import Searchbar from './components/searchbar';
import SerieInfo from './components/serieInfo';
import ErrorMessage from './components/errorMessage';
import './style/style.css';

class App extends Component {
  render() {
    const {serieName, error} = this.props.serie;
    return (
      <div className="container">
        <Searchbar/>        
        {(error)&& <ErrorMessage msg='Skriv in ett namn på serien'/>}
        {(serieName !== '')&& <SerieInfo/>}

      </div>
    );
  }
}


function mapStateToProps({serie}){
  return{
    serie
  };
}

export default connect (mapStateToProps)(App);
