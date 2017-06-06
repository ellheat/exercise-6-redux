import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectTeamTitle } from '../../modules/team/team.selectors';
import { selectPositionTeam, selectPositionTeamLoading } from '../../modules/positionTeam/positionTeam.selectors';
import { positionTeamActions } from '../../modules/positionTeam/positionTeam.actions';
import PositionTeam from './positionTeam.component';

const mapStateToProps = createStructuredSelector({
  team: selectTeamTitle,
  results: selectPositionTeam,
  isLoading: selectPositionTeamLoading,
});

const mapDispatchToProps = {
  getPosition: positionTeamActions.getPositionTeam,
};

export default connect(mapStateToProps, mapDispatchToProps)(PositionTeam);
