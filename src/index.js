import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'
import { syncHistoryWithStore } from 'react-router-redux'
import Root from './containers/Root'
import configureStore from './store/ConfigureStore'

const store = configureStore()
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })
const history = syncHistoryWithStore(appHistory, store)

render(
  <Root store={store} history={history} />,
  document.getElementById('root')
)
