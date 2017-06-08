import React, { PureComponent, PropTypes } from 'react';
import { round } from 'lodash';
import { Card, CardTitle, CardText } from 'react-toolbox/lib/card';

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
        <Card className="weather__card weather__card--main" style={{ width: '350px' }}>
          <CardTitle
            avatar={`http://openweathermap.org/img/w/${weather.getIn(['weather', 0, 'icon'])}.png`}
            title={weather.getIn(['weather', 0, 'main'])}
            subtitle={weather.getIn(['weather', 0, 'description'])}
          >
          </CardTitle>
          <CardText>
            <div className="weather__value">
              {`${this.temperatureConverter(weather.getIn(['main', 'temp']))}°C`}
            </div>
          </CardText>
        </Card>

        <Card style={{ width: '350px' }}>
          <CardTitle
            title="Clouds"
          >
          </CardTitle>
          <CardText>
            <div className="weather__value">
              {`${weather.getIn(['clouds', 'all'])}%`}
            </div>
          </CardText>
        </Card>

        <Card style={{ width: '350px' }}>
          <CardTitle
            title="Wind"
          >
          </CardTitle>
          <CardText>
            <div className="weather__value">
              {`${weather.getIn(['wind', 'speed'])} m/s`}
            </div>
          </CardText>
        </Card>

        <Card style={{ width: '350px' }}>
          <CardTitle
            title="Humidity"
          >
          </CardTitle>
          <CardText>
            <div className="weather__value">
              {`${weather.getIn(['main', 'humidity'])} %`}
            </div>
          </CardText>
        </Card>

        <Card style={{ width: '350px' }}>
          <CardTitle
            title="Pressure"
          >
          </CardTitle>
          <CardText>
            <div className="weather__value">
              {`${weather.getIn(['main', 'pressure'])} hpa`}
            </div>
          </CardText>
        </Card>
      </div>
    );
  }
}
