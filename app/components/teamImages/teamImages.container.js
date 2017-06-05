import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectTeamTitle } from '../../modules/team/team.selectors';
import { selectTeamImages } from '../../modules/teamImages/teamImages.selectors';
import TeamImages from './teamImages.component';

const mapStateToProps = createStructuredSelector({
  team: selectTeamTitle,
  images: selectTeamImages,
});

const mapDispatchToProps = {
  // getImages: teamImagesActions.getImages,
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamImages);
