import React, { PropTypes, PureComponent } from 'react';
import { List, ListSubHeader, ListItem } from 'react-toolbox/lib/list';
import classnames from 'classnames';


export default class TeamsList extends PureComponent {
  static propTypes = {
    items: PropTypes.object.isRequired,
    onItemClick: PropTypes.func.isRequired,
    currentTeam: PropTypes.string,
  };

  onClick = (item) => {
    this.props.onItemClick({
      name: item.get('shortName'),
      title: item.get('name'),
    });
  };

  render() {
    return (
      <List>
        <ListSubHeader caption={'Explore teams!'} />
        {this.props.items.toArray().map((item, key) => (
          <ListItem
            key={key}
            caption={item.get('name')}
            legend={item.get('shortName')}
            onClick={() => this.onClick(item)}
            avatar={item.get('crestUrl')}
            className={classnames({
              'teams-list__item--current': (item.get('shortName') === this.props.currentTeam),
            })}
          />
        ))}
      </List>
    );
  }
}
