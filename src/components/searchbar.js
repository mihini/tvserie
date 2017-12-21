import React, {Component} from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchSerieData} from '../actions/index.js';

class Searchbar extends Component{
  constructor(){
    super();
    this.state={
      value:''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.state.value !== ''){
      this.props.fetchSerie(this.state.value);
    }else{
      console.log('skriv ett namn');
    }

  }

  handleChange(e){
    this.setState({value: e.target.value});
  }

  render(){
    return(
      <form className="form" onSubmit={this.handleSubmit}>
        <input
          className="form__input" 
          placeholder="Sök en serie"
          value={this.state.value}
          onChange={this.handleChange}
        >
        </input>
        <button className="form__btn" type="submit">Sök</button>
      </form>

    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchSerie:fetchSerieData}, dispatch);
}

export default connect(null, mapDispatchToProps)(Searchbar);