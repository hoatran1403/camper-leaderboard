import React, { PropTypes } from 'react'
import BoardContainer from '../containers/BoardContainer'

class App extends React.Component {
  
  render () {
    return (
      <div className="container">
        <h1>FCC - Camper Leader board</h1>
        <BoardContainer />
      </div>
    )
  }
}

export default App;
