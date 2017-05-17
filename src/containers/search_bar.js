import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = { term: ''}
  }
    onInputChange = (event) => {
      this.setState({ term: event.target.value})

    }
    onFormSubmit = (event) =>{
      event.preventDefault();
        //go Fetch some weather data

        //call action creator: with the search term:
        this.props.fetchWeather(this.state.term);

        //clear search input for user's convinience:
        this.setState({term:''});

    }


   render(){
     return(
       <form onSubmit={this.onFormSubmit} className="input-group">
          <input
            placeholder="get a 5 days forecast for your city"
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Submit</button>
          </span>
       </form>
     );

   }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchWeather}, dispatch);
}
export default connect(null, mapDispatchToProps)(SearchBar);
