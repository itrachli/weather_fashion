import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCCKXyLth7S7IxsXm3GqnPYW5JHtIsTLlw',
      authDomain: 'weather-fashion.firebaseapp.com',
      databaseURL: 'https://weather-fashion.firebaseio.com',
      projectId: 'weather-fashion',
      storageBucket: 'weather-fashion.appspot.com',
      messagingSenderId: '284046396245'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
