import React, { Component } from 'react';
//import SimpleMap from './googlemap_react.jsx';
import FlatList from './flat_list.jsx';
import GoogleMapReact from 'google-map-react';


import flats from '../../data/flats';
import FlatList from './flat_list';
import Marker from './marker';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      selectedFlat: flats[0],
      flats //why flats is in the state ?

     };
  }

  center() {
    return {
      lat: this.state.selectFlat.lat,
      lng: this.state.selectFlat.lng
    };
  }

  selectFlat = (index) => {
    this.setState({selectedFlat: flats[index]});
    // supongo que aqui index es el index del flat elegido por el usuario
  }



  render() {
    return (
      <div>
      <FlatList
      flats={this.state.flats}// linea 7
      selectedFlat={this.state.selectedFlat}
      selectFlat={this.selectFlat}
       />
          <div className="map-container">
          <GoogleMapReact defaultCenter={this.center()} defaultZoom={12}>
          <Marker lat={this.state.selectedFlat.lat} lng={this.state.selectedFlat.lng} />
          </GoogleMapReact>
        </div>


      </div>

      );
  }
}


export default App;
