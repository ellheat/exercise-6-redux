import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import { FormattedMessage } from 'react-intl';
import Helmet from 'react-helmet';

import Home from '../dashboard.component';
import messages from '../dashboard.messages';
import { fromJS } from 'immutable';


describe('Home: Component', () => {
  const defaultProps = {
    router: {},
    teams: fromJS({
      error: null,
      list: [],
    }),
    getTeams: () => {},
    changeTeam: () => {},
    currentTeam: '',
  };

  const component = (props) => (
    <Home {...defaultProps} {...props} />
  );

  it('should render Home root', () => {
    const wrapper = shallow(component({}));
    expect(wrapper.find('.dashboard')).to.have.length(1);
  });

  it('should render <Helmet/>', () => {
    const wrapper = shallow(component({}));
    expect(wrapper.find(Helmet)).to.have.length(1);
  });

  it('should pass title prop to <Helmet/>', () => {
    const wrapper = shallow(component({}));
    const helmetProps = wrapper.find(Helmet).props();

    expect(helmetProps.title).to.be.a('string');
  });
});
