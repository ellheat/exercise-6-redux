import React, { PureComponent, PropTypes } from 'react';
import Helmet from 'react-helmet';
import TeamsList from './teamsList/teamsList.component';
import Content from './content/content.component';


export default class Dashboard extends PureComponent {
  static propTypes = {
    teams: PropTypes.object,
    getTeams: PropTypes.func.isRequired,
    router: PropTypes.object.isRequired,
    changeTeam: PropTypes.func.isRequired,
    currentTeam: PropTypes.string,
    stadium: PropTypes.object,
    weather: PropTypes.object,
    fetchWeather: PropTypes.func,
  };

  componentWillMount() {
    this.props.getTeams();
  }

  render() {
    const { stadium, teams, changeTeam, currentTeam, weather, fetchWeather } = this.props;

    return (
      <div className="dashboard">
        <Helmet
          title="Dashboard"
        />
          <div className="dashboard__container">

          <div className="dashboard__container-teams">
            <TeamsList
              items={teams}
              onItemClick={changeTeam}
              currentTeam={currentTeam}
            />
          </div>
          <div className="dashboard__container-content">
            <Content stadium={stadium} weather={weather} fetchWeather={fetchWeather} />
          </div>
        </div>
      </div>
    );
  }
}
