import React, { PureComponent, PropTypes } from 'react';
import { round } from 'lodash';
import { FormattedMessage } from 'react-intl';
import messages from './weather.messages'

const KELVIN_AVERAGE = 273.15;


export default class Weather extends PureComponent {
  static propTypes = {
    stadium: PropTypes.object,
    weather: PropTypes.object,
    fetchWeather: PropTypes.func,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.stadium !== this.props.stadium) {
      this.fetchWeather(nextProps.stadium);
    }
  }

  fetchWeather(stadium) {
    if (stadium) {
      const lat = stadium.lat;
      const lng = stadium.lng;

      this.props.fetchWeather(lat, lng);
    }
  }

  temperatureConverter(temperature) {
    return round(temperature - KELVIN_AVERAGE, 1);
  }

  render() {
    const { weather } = this.props;

    if (!weather) {
      return null;
    }

    return (
      <div className="weather">
        <div>
          <FormattedMessage {...messages.name} values={{name: weather.get('name')}} />
        </div>
        <div>
          <FormattedMessage {...messages.temperature}
                            values={{value: this.temperatureConverter(weather.getIn(['main', 'temp']))}}
          />
        </div>
      </div>
    );
  }
}
