import React, { PureComponent } from 'react';
import { Tab, Tabs } from 'react-toolbox/lib/tabs';
import GoogleMaps from '../googleMaps/googleMaps.component';

export default class Content extends PureComponent {

  state = {
    fixedIndex: 1,
  };

  handleFixedTabChange = (index) => {
    this.setState({ fixedIndex: index });
  };

  render() {
    return (
      <section>
        <Tabs index={this.state.fixedIndex} onChange={this.handleFixedTabChange} fixed>
          <Tab label= {'Google Maps'}><small>
            <GoogleMaps />
          </small></Tab>
          <Tab label={'Weather'}><small>Weather content</small></Tab>
          <Tab label={'Images'}><small>Some photos</small></Tab>
        </Tabs>
      </section>
    );
  }
}
