import Board from '../components/Board'
import { connect } from 'react-redux'
import fetchTopRecent from '../actions/actions'

const mapStateToProps = state => ({
  dataArray: state.dataArray
})

const mapDispatchToProps = ({
  fetchTopRecent
})

const BoardContainer = connect(mapStateToProps, mapDispatchToProps)(Board)

export default BoardContainer;
