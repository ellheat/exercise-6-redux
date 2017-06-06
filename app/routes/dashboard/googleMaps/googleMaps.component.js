import React, { PureComponent } from 'react';
import GoogleMapReact from 'google-map-react';

export default class googleMaps extends PureComponent {
  static defaultProps = {
    center: { lat: 59.95, lng: 30.33 },
    zoom: 11,
  };

  render() {
    return (
      <GoogleMapReact
        style={{
          height: 800,
          position: 'relative',
        }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        bootstrapURLKeys={{
          key: 'AIzaSyDa5m3X_UYL4hmqZ-9ohlXg8JP7HBHWTVg',
          language: 'pl',
        }}
      >
      </GoogleMapReact>
    );
  }
}
