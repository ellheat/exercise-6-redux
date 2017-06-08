import React, { PureComponent } from 'react';
const marker = require('../../images/marker.png');

export class PinComponent extends PureComponent {
  render() {
    return (
      <img src={marker} style={{ width: '20px' }} />
    );
  }
}
