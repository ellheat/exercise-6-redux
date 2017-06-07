import React, { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Tab, Tabs } from 'react-toolbox/lib/tabs';
import PositionTeam from '../../../components/positionTeam/positionTeam.container';
import messages from './content.messages';
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
        <Tabs index={this.state.currentIndex} onChange={this.handleFixedTabChange} fixed>
          <Tab label={'Google Maps'}>
            <PositionTeam />
          </Tab>
          <Tab label={<FormattedMessage {...messages.weather} />}>
            <small>Weather content</small>
          </Tab>
          <Tab label={<FormattedMessage {...messages.photos} />}>
            <TeamImages />
          </Tab>
        </Tabs>
      </section>
    );
  }
}
