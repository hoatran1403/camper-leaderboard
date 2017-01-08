
import React, { PropTypes } from 'react'

class Board extends React.Component {
  constructor(props){
    super(props)
  }

  componentWillMount() {
    this.props.fetchTopRecent()
  }

  displayItems() {
    if (Object.getOwnPropertyNames(this.props.dataArray).length > 0){
      return this.props.dataArray.dataArray.map((item,index) => (
        <tr key = {index}>
          <td>{index + 1}</td>
          <td>{item.username}</td>
          <td>{item.recent}</td>
          <td>{item.alltime}</td>
        </tr>
      ))
    }
  }

  render () {
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Camper Name</th>
            <th>Points in past 30 days</th>
            <th>All time points</th>
          </tr>
        </thead>
        <tbody>
          {this.displayItems()}
        </tbody>
      </table>
    </div>
  )
}
}

export default Board;
