import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectTeamTitle } from '../../modules/team/team.selectors';
import { selectTeamImages, selectTeamImagesLoading } from '../../modules/teamImages/teamImages.selectors';
import TeamImages from './teamImages.component';

const mapStateToProps = createStructuredSelector({
  team: selectTeamTitle,
  images: selectTeamImages,
  isLoading: selectTeamImagesLoading,
});

export default connect(mapStateToProps, null)(TeamImages);
