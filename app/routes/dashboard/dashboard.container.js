import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Home from './dashboard.component';
import { teamsActions } from '../../modules/teams/teams.actions';
import { teamActions } from '../../modules/team/team.actions';
import { selectTeamsList } from '../../modules/teams/teams.selectors';
import { selectTeamName, selectTeamStadium } from '../../modules/team/team.selectors';


const mapStateToProps = createStructuredSelector({
  teams: selectTeamsList,
  currentTeam: selectTeamName,
  stadium: selectTeamStadium,
});

export default connect(mapStateToProps, {
  getTeams: teamsActions.getTeams,
  changeTeam: teamActions.changeTeam,
})(Home);
