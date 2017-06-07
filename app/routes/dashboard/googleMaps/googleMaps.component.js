import React, { PropTypes, PureComponent } from 'react';
import GoogleMapReact from 'google-map-react';

const DEFAULT_ZOOM = 17;

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class googleMaps extends PureComponent {
  static propTypes = {
    stadium: PropTypes.object,
  };

  render() {
    const { stadium } = this.props;

    if (!stadium) {
      return null;
    }

    return (
      <GoogleMapReact
        style={{
          height: 800,
          position: 'relative',
        }}
        defaultCenter={{
          lat: stadium.lat,
          lng: stadium.lng,
        }}
        defaultZoom={DEFAULT_ZOOM}
        bootstrapURLKeys={{
          key: 'AIzaSyDa5m3X_UYL4hmqZ-9ohlXg8JP7HBHWTVg',
          language: 'pl',
        }}
      >
        <AnyReactComponent
          lat={stadium.lat}
          lng={stadium.lng}
          text={stadium.stadiumName}
        />
      </GoogleMapReact>
    );
  }
}
