import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import { fromJS } from 'immutable';

import TeamImages from '../teamImages.component';


describe('teamImages: Component', () => {
  const defaultProps = {
    team: '',
    images: fromJS([]),
    isLoading: false,
    getImages: () => {},
  };

  const Component = (props) => (
    <TeamImages {...defaultProps} {...props} />
  );

  it('should render root', () => {
    const wrapper = shallow(Component());
    expect(wrapper.find('.team-images')).to.have.length(1);
  });

  it('should not render loading', () => {
    const wrapper = shallow(Component());
    expect(wrapper.find('.team-images__loading')).to.have.length(0);
  });

  it('should render loading', () => {
    const wrapper = shallow(Component({ isLoading: true }));
    expect(wrapper.find('.team-images__loading')).to.have.length(1);
  });

  it('should call getImages', () => {
    const getImages = spy();
    shallow(Component({ getImages }));
    expect(getImages.calledOnce).to.be.true;
  });

  it('should pass params to getImages', () => {
    const getImages = spy();
    shallow(Component({ getImages, team: 'Aston' }));
    expect(getImages.firstCall.args).to.deep.equal([{ team: 'Aston' }]);
  });

  it('should render images', () => {
    const images = fromJS([
      {
        caption: 'Image',
        ['display_sizes']: [
          {
            name: 'comp',
            uri: 'http://whatever.com/comp',
          },
          {
            name: 'preview',
            uri: 'http://whatever.com/preview',
          },
          {
            name: 'thumb',
            uri: 'http://whatever.com/thumb',
          },
        ],
      },
      {
        caption: 'Image',
        ['display_sizes']: [
          {
            name: 'comp',
            uri: 'http://whatever.com/comp',
          },
          {
            name: 'preview',
            uri: 'http://whatever.com/preview',
          },
          {
            name: 'thumb',
            uri: 'http://whatever.com/thumb',
          },
        ],
      },
    ]);
    const wrapper = shallow(Component({ images }));
    expect(wrapper.find('.team-images__item')).to.have.length(2);
    expect(wrapper.find('.team-images__link')).to.have.length(2);
    expect(wrapper.find('.team-images__image')).to.have.length(2);
  });
});
