const data = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_DATA':
      return {dataArray : action.dataArray}
      break;
    default:
    return state
  }

}

export default data
