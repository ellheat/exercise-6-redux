import React, { PureComponent } from 'react';
import { Tab, Tabs } from 'react-toolbox/lib/tabs';
import TeamImages from '../../../components/teamImages/teamImages.container';

export default class Content extends PureComponent {

  state = {
    fixedIndex: 2,
  };

  handleFixedTabChange = (index) => {
    this.setState({ fixedIndex: index });
  };

  render() {
    return (
      <section>
        <Tabs index={this.state.fixedIndex} onChange={this.handleFixedTabChange} fixed>
          <Tab label= {'Google Maps'}>
            <small>Map</small>
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
