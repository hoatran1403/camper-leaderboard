import Board from '../components/Board'
import { connect } from 'react-redux'
import * as actions from '../actions/actions'

const mapStateToProps = state => ({
  dataArray: state.dataArray
})

const mapDispatchToProps = ({
  fetchTopRecent: actions.fetchTopRecent,
  fetchTopAlltime: actions.fetchTopAlltime
})

const BoardContainer = connect(mapStateToProps, mapDispatchToProps)(Board)

export default BoardContainer;
