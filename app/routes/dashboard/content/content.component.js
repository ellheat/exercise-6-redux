import React, { PureComponent } from 'react';
import { Tab, Tabs } from 'react-toolbox/lib/tabs';
import GoogleMaps from '../googleMaps/googleMaps.component';
import TeamImages from '../../../components/teamImages/teamImages.container';

export default class Content extends PureComponent {

  state = {
    currentIndex: 1,
    fixedIndex: 2,
  };

  handleFixedTabChange = (index) => {
    this.setState({ currentIndex: index });
  };

  render() {
    return (
      <section>
        <Tabs index={this.state.fixedIndex} onChange={this.handleFixedTabChange} fixed>
          <Tab label= {'Google Maps'}>
            <GoogleMaps />
          </Tab>
          <Tab label={'Weather'}>
            <small>Some weather</small>
          </Tab>
          <Tab label={'Images'}>
            <TeamImages />
          </Tab>
        </Tabs>
      </section>
    );
  }
}
