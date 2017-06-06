import React, { PureComponent } from 'react';
import { Tab, Tabs } from 'react-toolbox/lib/tabs';
import GoogleMaps from '../googleMaps/googleMaps.component';
import PositionTeam from '../../../components/positionTeam/positionTeam.container';
import TeamImages from '../../../components/teamImages/teamImages.container';

export default class Content extends PureComponent {

  state = {
    currentIndex: 1,
    fixedIndex: 0,
  };

  handleFixedTabChange = (index) => {
    this.setState({ currentIndex: index });
  };

  render() {
    return (
      <section>
        <Tabs index={this.state.fixedIndex} onChange={this.handleFixedTabChange} fixed>
          <Tab label= {'Google Maps'}>
            <PositionTeam />
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
