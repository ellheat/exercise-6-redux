import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectTeamTitle } from '../../modules/team/team.selectors';
import { selectTeamImages, selectTeamImagesLoading } from '../../modules/teamImages/teamImages.selectors';
import { teamImagesActions } from '../../modules/teamImages/teamImages.actions';
import TeamImages from './teamImages.component';

const mapStateToProps = createStructuredSelector({
  team: selectTeamTitle,
  images: selectTeamImages,
  isLoading: selectTeamImagesLoading,
});

const mapDispatchToProps = {
  getImages: teamImagesActions.getTeamImages,
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamImages);
