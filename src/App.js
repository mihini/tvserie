import React, { Component } from 'react';
import {connect} from 'react-redux';
import Searchbar from './components/searchbar';
import SerieInfo from './components/serieInfo';
import './App.css';

class App extends Component {
  render() {
    const {serieName} = this.props.serie;
    return (
      <div className="">
        <Searchbar/>
        {(serieName !== '')? <SerieInfo/> : '' }
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
