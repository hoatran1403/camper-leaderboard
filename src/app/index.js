import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './components/App'

//import css
import bootstrap from './../../node_modules/bootstrap/dist/css/bootstrap.css'
import style from './styles/style.css'

render(<App />, document.getElementById('root'))
