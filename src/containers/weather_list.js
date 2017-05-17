import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';


class WeatherList extends Component{
  renderWeather=(cityData)=>{

    const name = cityData.city.name;
    const temps = cityData.list.map( weather => weather.main.temp);
    const press = cityData.list.map( weather => weather.main.pressure);
    const humid= cityData.list.map( weather => weather.main.humidity);

    const { lon, lat } = cityData.city.coord;
    //
    // the same as:
    // const lon = cityData.city.coord.lon;
    // const lat = cityData.city.coord.lat;


      return(
        <tr key={name}>
          <td><GoogleMap lon = {lon}  lat = {lat}/></td>
          <td>
            <Chart data={temps} color="orange"  units="K"/>
          </td>
          <td>
            <Chart data={press} color="red" units="hPa" />
          </td>
          <td>
            <Chart data={humid} color="blue"  units = "%"/>
          </td>
        </tr>
      );
  }

  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
        {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );

  }
}


function mapStateToProps({ weather }){
  return { weather };
}

// same as:
// function mapStateToProps(state){
//   return {weather: state.weather }; //state.weather  - Becouse it's assign in reducers/index.js
// }


export default connect (mapStateToProps)(WeatherList);
