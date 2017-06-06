import React, { PureComponent, PropTypes } from 'react';
import Helmet from 'react-helmet';
import TeamsList from './teamsList/teamsList.component';
import Content from './content/content.component';


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
          <div className="dashboard__container">

          <div className="dashboard__container-teams">
            <TeamsList items={this.props.teams} />
          </div>
          <div className="dashboard__container-content">
            <Content />
          </div>
        </div>
      </div>
    );
  }
}
