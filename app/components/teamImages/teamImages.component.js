import React, { PropTypes, PureComponent } from 'react';

export default class TeamImages extends PureComponent {

  static propTypes = {
    images: PropTypes.object.isRequired,
    getImages: PropTypes.func.isRequired,
    team: PropTypes.string,
    isLoading: PropTypes.bool,
  };

  componentWillMount = () => {
    this.props.getImages({ team: this.props.team });
  };

  getThumb = (image) => {
    const thumb = image.get('display_sizes').findEntry((item) => {
      console.log(item.get('name'));
      return item.get('name') === 'thumb';
    })[1];
    return thumb.get('uri');
  };

  getFullImage = (image) => {
    const full = image.get('display_sizes').findEntry((item) => {
      return item.get('name') === 'comp';
    })[1];
    return full.get('uri');
  };

  isLoading = () => {
    if (!this.props.isLoading) {
      return null;
    }

    return <div className="team-images__loading">Loading</div>;
  };

  render() {
    return (
      <div className="team-images" onClick={this.onClick}>
        { this.isLoading() }
        {this.props.images.map((image, key) => {
          const caption = image.get('caption');
          const thumb = this.getThumb(image);
          const full = this.getFullImage(image);

          return (
            <div className="team-images__item" key={key}>
              <a className="team-images__link" href={full} target="_blank" title={caption}>
                <img className="team-images__image" src={thumb} alt={caption} />
              </a>
            </div>
          );
        })}
      </div>
    );
  }
}
