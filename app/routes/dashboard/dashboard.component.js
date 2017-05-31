import React, { PureComponent, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import envConfig from 'env-config';
import TeamsList from './teamsList/teamsList.component';

import messages from './dashboard.messages';


export default class Dashboard extends PureComponent {
  static propTypes = {
    teams: PropTypes.object,
    getTeams: PropTypes.func.isRequired,
    router: PropTypes.object.isRequired,
  };

  componentWillMount() {
    this.props.getTeams();
  }

  render() {
    return (
      <div className="dashboard">
        <Helmet
          title="Dashboard"
        />

        <h1 className="dashboard__title">
          <i className="dashboard__title-logo" />
          <FormattedMessage {...messages.welcome} />
        </h1>

        <TeamsList items={this.props.teams} />
      </div>
    );
  }
}
