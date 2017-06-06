import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Home from './dashboard.component';
import { teamsActions } from '../../modules/teams/teams.actions';
import {
  selectTeamsList,
} from '../../modules/teams/teams.selectors';


const mapStateToProps = createStructuredSelector({
  teams: selectTeamsList,

});

export default connect(mapStateToProps, {
  getTeams: teamsActions.getTeams,
})(Home);
