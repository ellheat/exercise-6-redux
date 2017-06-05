import React, { PropTypes, PureComponent } from 'react';

export default class TeamImages extends PureComponent {

  createItems = (count) => {
    let items = [];
    for (let i = 0; i < count; i++) {
      const item = (
        <div className="team-images__item" key={`team-${i}`}>
          <a className="team-images__link" href="http://lorempixel.com/600/300" target="_blank">
            <img className="team-images__image" src="http://lorempixel.com/600/300" alt="" />
          </a>
        </div>
      );
      items.push(item);
    }
    return items;
  };

  render() {
    console.log(this.props);
    return (
      <div className="team-images">
        { this.createItems(11) }
      </div>
    );
  }
}
