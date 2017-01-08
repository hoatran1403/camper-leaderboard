
const receiveData = (dataArray) => {

  return {
    type: 'RECEIVE_DATA',
    dataArray
  }
}

export const fetchTopRecent = () => {
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

export const fetchTopAlltime = () => {
  return dispatch => {
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
    .then(response => {
      let json = response.json()
      return json
    })
    .then(json => {
      dispatch(receiveData(json))
    })
  }
}
