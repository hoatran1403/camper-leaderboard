import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import App from './components/App'

//import css
import bootstrap from './../../node_modules/bootstrap/dist/css/bootstrap.css'
import style from './styles/style.css'


import rootReducer from './reducers'

const loggerMiddleware = createLogger();

const store = createStore(rootReducer,applyMiddleware(thunkMiddleware,loggerMiddleware))

render(
  <Provider store = { store }>
    <App />
  </Provider>
  , document.getElementById('root'))
