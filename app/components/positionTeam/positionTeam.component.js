import React, { PropTypes, PureComponent } from 'react';
import _isUndefined from 'lodash/isUndefined';
import GoogleMapReact from 'google-map-react';

import { PinComponent } from './pin.component';

export default class PositionTeam extends PureComponent {

  static propTypes = {
    results: PropTypes.object.isRequired,
    getPosition: PropTypes.func.isRequired,
    team: PropTypes.string,
    isLoading: PropTypes.bool,
  };

  componentWillMount = () => {
    this.props.getPosition({ team: this.props.team });
  };

  getLat = (data) => {
    return data.get('geometry').findEntry((item) => {
      return item.get('lat');
    })[1];
  };

  isLoading = () => {
    if (!this.props.isLoading) {
      return null;
    }

    return <div className="team-images__loading">Loading</div>;
  };

  render() {
    if (_isUndefined(this.props.results)) {
      return null;
    }
    return (
      <div className="team-images">
        {this.isLoading()}
        {this.props.results.map((data, key) => {
          return (
            <GoogleMapReact
              key={key}
              style={{
                height: 700,
                width: '100%',
                position: 'relative',
              }}
              defaultCenter={{ lat: this.getLat(data).get('lat'), lng: this.getLat(data).get('lng') }}
              defaultZoom={15}
              bootstrapURLKeys={{
                key: 'AIzaSyDa5m3X_UYL4hmqZ-9ohlXg8JP7HBHWTVg',
                language: 'pl',
              }}
            >
              <PinComponent
                lat={this.getLat(data).get('lat')}
                lng={this.getLat(data).get('lng')}
              />
            </GoogleMapReact>
          );
        })}
      </div>
    );
  }
}
