/**
 * 在球场
 * zaiqiuchang.com
 */

import React, {Component} from 'react'
import {Provider} from 'react-redux'

import {AppNavigator} from './pages/index/InitIndex'

export default class App extends Component {
  render () {
    return (
      // <Provider store={store}>
        <AppNavigator />
      // </Provider>
    )
  }
}
