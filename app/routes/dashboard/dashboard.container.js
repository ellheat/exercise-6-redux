import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Home from './dashboard.component';
import { teamsActions } from '../../modules/teams/teams.actions';
import { teamActions } from '../../modules/team/team.actions';
import { WeatherActions } from '../../modules/weather/weather.redux';
import { selectTeamsList } from '../../modules/teams/teams.selectors';
import { selectTeamName, selectTeamStadium } from '../../modules/team/team.selectors';
import { selectWeather } from '../../modules/weather/weather.selectors';


const mapStateToProps = createStructuredSelector({
  teams: selectTeamsList,
  currentTeam: selectTeamName,
  stadium: selectTeamStadium,
  weather: selectWeather,
});

export default connect(mapStateToProps, {
  getTeams: teamsActions.getTeams,
  changeTeam: teamActions.changeTeam,
  fetchWeather: WeatherActions.fetch,
})(Home);
