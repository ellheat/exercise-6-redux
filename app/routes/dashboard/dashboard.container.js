import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Home from './dashboard.component';
import { teamsActions } from '../../modules/teams/teams.actions';
import {
  selectTeamsList,
} from '../../modules/teams/teams.selectors';
import { localesActions } from '../../modules/locales/locales.actions';
import { selectLocalesLanguage } from '../../modules/locales/locales.selectors';


const mapStateToProps = createStructuredSelector({
  teams: selectTeamsList,
  language: selectLocalesLanguage,

});

export default connect(mapStateToProps, {
  getTeams: teamsActions.getTeams,
  setLanguage: localesActions.setLanguage,

})(Home);
