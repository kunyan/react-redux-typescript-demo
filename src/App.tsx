import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import Human from './components/Human';
import Toolbox from './components/Toolbox';
import DevTools from './components/DevTools';

import './static/all.css';

const store = configureStore();

render(
  <Provider store={store}>
    <div>
      <Human />
      <Toolbox />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root'),
);
