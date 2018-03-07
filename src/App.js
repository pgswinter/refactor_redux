import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './redux/store'
import AsyncApp from './Containers/AsyncApp'
// import AsyncApp from './Containers/MyAsyncApp'
 
const store = configureStore()
 
export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <AsyncApp />
      </Provider>
    )
  }
}