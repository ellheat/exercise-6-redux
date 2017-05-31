import React, { PropTypes, PureComponent } from 'react';
import { List, ListSubHeader, ListItem } from 'react-toolbox/lib/list';


export default class TeamsList extends PureComponent {
  static propTypes = {
    items: PropTypes.object.isRequired,
  };

  componentWillReceiveProps(){
    console.log(this.props.items);
  }

  render() {
    console.log(this.props.items);
    return (
      <List>
        <ListSubHeader caption={'Explore teams!'} />
        {this.props.items.toArray().map((item, key) => (
          <ListItem
            key={key}
            caption={item.get('name')}
            legend={item.get('shortName')}
          />
        ))}
      </List>
    );
  }
}
