import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import rootReducer from 'reducers/rootReducer';

const Root = ({ children, initialState = {} }) => {
  const store = applyMiddleware(reduxThunk)(createStore)(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default Root;
