
const receiveData = (dataArray) => {
  
  return {
    type: 'RECEIVE_DATA',
    dataArray
  }
}

const fetchTopRecent = () => {
  return dispatch => {
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
    .then(response => {
      let json = response.json()
      return json
    })
    .then(json => {
      dispatch(receiveData(json))
    })
  }
}

export default fetchTopRecent
