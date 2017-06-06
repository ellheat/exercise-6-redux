import React, { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Tab, Tabs } from 'react-toolbox/lib/tabs';
import GoogleMaps from '../googleMaps/googleMaps.component';

import messages from './content.messages';

export default class Content extends PureComponent {

  state = {
    currentIndex: 1,
  };

  handleFixedTabChange = (index) => {
    this.setState({ currentIndex: index });
  };

  render() {
    return (
      <section>

        <Tabs index={this.state.currentIndex} onChange={this.handleFixedTabChange} fixed>
          <Tab label={'Google Maps'}>
            <small>
              <GoogleMaps />
            </small>
          </Tab> <Tab label={<FormattedMessage {...messages.weather} />}>
          <small>Weather content</small>
        </Tab>
          <Tab label={<FormattedMessage {...messages.photos} />}>
            <small>Some photos</small>
          </Tab>
        </Tabs>
      </section>
    );
  }
}
