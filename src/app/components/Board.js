
import React, { PropTypes } from 'react'



class Board extends React.Component {

  constructor(props){
    super(props)
   const isTopRecent = true;
  }

  componentWillMount() {
    this.props.fetchTopRecent()
    this.isTopRecent = true;
  }

  displayItems() {
    if (Object.getOwnPropertyNames(this.props.dataArray).length > 0){
      return this.props.dataArray.dataArray.map((item,index) => (
        <tr key = {index}>
          <td>{index + 1}</td>
          <td><img className="item-image" width='40px' height='40px' src={item.img}></img>{'  '}{item.username}</td>
          <td>{item.recent}</td>
          <td>{item.alltime}</td>
        </tr>
      ))
    }
  }

  handleOnClickTopRecent(e){
    e.preventDefault();
    this.props.fetchTopRecent();
    this.isTopRecent = true;
  }

  handleOnClickTopAlltime(e){
    e.preventDefault();
    this.props.fetchTopAlltime();
    this.isTopRecent = false;
  }

  render () {
  return (
    <div className = "board">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Camper Name</th>
            <th><a onClick = { this.handleOnClickTopRecent.bind(this) }>
              {this.isTopRecent ? '< Points in past 30 days >' : 'Points in past 30 days'}
              </a></th>
            <th><a onClick = { this.handleOnClickTopAlltime.bind(this) }>
              {!this.isTopRecent ? '< All time points >' : 'All time points'}
            </a></th>
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
