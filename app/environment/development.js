import defaultsDeep from 'lodash/defaultsDeep';

import base from './base';


export default defaultsDeep({
  api: {
    serverUrl: 'http://localhost:3000/',
    clientUrl: '',
  },
  name: 'development',
}, base);
