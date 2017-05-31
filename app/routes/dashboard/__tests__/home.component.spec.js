import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import { FormattedMessage } from 'react-intl';
import Helmet from 'react-helmet';

import { Home } from '../dashboard.component';
import messages from '../dashboard.messages';
import { LanguageSelector } from '../languageSelector/languageSelector.component';


describe('Home: Component', () => {
  const defaultProps = {
    fetchMaintainers: () => {},
    items: [1, 2, 3],
    language: 'en',
    setLanguage: () => {},
    router: {},
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

  it('should render .home__title', () => {
    const wrapper = shallow(component({}));
    expect(wrapper.find('.home__title')).to.have.length(1);
  });

  it('should render welcome message inside .home__title', () => {
    const wrapper = shallow(component({}));
    expect(wrapper.find('.home__title').find(FormattedMessage).prop('id')).to.equal(messages.welcome.id);
  });

  it('should render <LanguageSelector />', () => {
    const wrapper = shallow(component({}));
    expect(wrapper.find(LanguageSelector)).to.have.length(1);
  });

  it('should pass props to <LanguageSelector />', () => {
    const setLanguage = spy();
    const wrapper = shallow(component({ setLanguage }));
    const languageSelectorProps = wrapper.find(LanguageSelector).props();

    expect(languageSelectorProps.language).to.equal(defaultProps.language);
    expect(languageSelectorProps.router).to.equal(defaultProps.router);

    languageSelectorProps.setLanguage();
    expect(setLanguage.calledOnce).to.be.true;
  });
});
