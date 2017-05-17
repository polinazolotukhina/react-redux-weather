import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount(){
    new google.maps.Map(this.refs.map, { //this.refs.map - show where on the page it should render and appear
      zoom:12,
      center:{
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }
  render(){
    return <div ref="map" />
  }
}

export default GoogleMap;
