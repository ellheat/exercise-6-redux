import React, { PropTypes, PureComponent } from 'react';
import Helmet from 'react-helmet';
import { IntlProvider } from 'react-intl';
import { get } from 'lodash';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import theme from './../assets/react-toolbox/theme';

import { translationMessages } from '../i18n';

class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <Helmet
          titleTemplate="%s - Apptension React Boilerplate"
          defaultTitle="Apptension React Boilerplate"
          meta={[
            { name: 'description', content: 'Apptension React Boilerplate application' },
          ]}
        />

        <IntlProvider
          locale="en"
          messages={translationMessages["en"]}
        >
          <ThemeProvider theme={theme}>
            {React.Children.only(this.props.children)}
          </ThemeProvider>
        </IntlProvider>
      </div>
    );
  }
}

App.propTypes = {
  router: PropTypes.object.isRequired,
  children: PropTypes.node,
};

export default App;
