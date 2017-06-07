import React, { PropTypes, PureComponent } from 'react';
import { Tab, Tabs } from 'react-toolbox/lib/tabs';
import { FormattedMessage } from 'react-intl';

import messages from './content.messages';
import GoogleMaps from '../googleMaps/googleMaps.component';
import Weather from '../weather/weather.component';
import TeamImages from '../../../components/teamImages/teamImages.container';

export default class Content extends PureComponent {
  static propTypes = {
    stadium: PropTypes.object,
    weather: PropTypes.object,
    fetchWeather: PropTypes.func,
  };

  state = {
    currentIndex: 1,
  };

  handleFixedTabChange = (index) => {
    this.setState({ currentIndex: index });
  };

  render() {
    const { stadium, weather, fetchWeather } = this.props;

    return (
      <section>
        <Tabs index={this.state.currentIndex} onChange={this.handleFixedTabChange} fixed>
          <Tab label={<FormattedMessage {...messages.map} />}>
            <GoogleMaps stadium={stadium} />
          </Tab>
          <Tab label={<FormattedMessage {...messages.weather} />}>
            <Weather stadium={stadium} weather={weather} fetchWeather={fetchWeather} />
          </Tab>
          <Tab label={<FormattedMessage {...messages.photos} />}>
            <TeamImages />
          </Tab>
        </Tabs>
      </section>
    );
  }
}
