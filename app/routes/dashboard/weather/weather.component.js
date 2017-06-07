import React, { PureComponent, PropTypes } from 'react';


export default class Weather extends PureComponent {
  static propTypes = {
    stadium: PropTypes.object,
    weather: PropTypes.object,
    fetchWeather: PropTypes.func,
  };

  componentWillMount() {
    this.props.fetchWeather();
  }

  render() {
    console.log(this.props.weather);

    return (
      <div className="weather">
        asd
      </div>
    );
  }
}
