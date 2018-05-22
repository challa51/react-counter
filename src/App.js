import React, { Component } from 'react';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import './App.css';
import Main from './Main'
import reducer from './Reducers'
//Hai Deepak1
import {combineReducers} from 'redux'

const store= createStore(combineReducers({Counter:reducer}));
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Main></Main>
      </Provider>
    );
  }
}

export default App;
