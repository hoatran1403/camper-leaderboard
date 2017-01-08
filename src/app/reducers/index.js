import { combineReducers } from 'redux'

import data from './data'

const rootReducer = combineReducers({
  dataArray: data
})

export default rootReducer
