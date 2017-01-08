import React, { PropTypes } from 'react'
import BoardContainer from '../containers/BoardContainer'

class App extends React.Component {

  render () {
    return (
      <div className="container">
        <h1 className="text-center">FCC - Camper Leader board</h1>
        <BoardContainer />
        <p className="text-center">Developed by <a href="http://hoath.surge.sh/" target="__blank">Tran Huu Hoa</a></p>
        <div className="text-center"><h6>Check out my <a href="https://github.com/hoatran1403/camper-leaderboard" target="__blank">Repository</a></h6></div>
      </div>
    )
  }
}

export default App;
