import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

import HomePage from './components/home-page'
import ShowImage from './show-image'

import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import * as appConfig from './config/app-config'
import './index.css'
import logger from 'redux-logger'
import PrintPreview from './components/print-preview'

import rootReducer from './reducers/index'

const store = createStore(rootReducer, appConfig.initialState, applyMiddleware(logger));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <div className="App">
            <Router>
              <Switch>
                <Route path='/categories/:catId' component={HomePage} />
                <Route path='/mockup/:pageId' component={ShowImage} />
                <Route path='/print' component={PrintPreview} />
                <Redirect to='/categories/all-cat'/>
              </Switch>
            </Router>
          </div>
      </Provider>
    );
  }
}

export default App;
