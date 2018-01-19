import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import DevTools from '../components/DevTools';
import { rootReducer } from './reducers';
const configureStore = () => {
  const enhancer = compose(applyMiddleware(thunk), DevTools.instrument());

  const store = createStore(rootReducer, enhancer);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').rootReducer;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
