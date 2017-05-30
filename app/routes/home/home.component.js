import React, { PureComponent, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import envConfig from 'env-config';
import TeamsList from './teamsList/teamsList.component';

import messages from './home.messages';


export default class Home extends PureComponent {
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
      <div className="home">
        <Helmet
          title="Homepage"
        />

        <h1 className="home__title">
          <i className="home__title-logo" />
          <FormattedMessage {...messages.welcome} />
        </h1>

        <TeamsList items={this.props.teams} />
      </div>
    );
  }
}
