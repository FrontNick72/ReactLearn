let mockApiData = [
  {
    id: 1,
    name: 'Enter Sandman',
  },
  {
    id: 2,
    name: 'Welcome',
  },
  {
    id: 3,
    name: 'Welcome Home',
  }
];

export const getTracks = () => dispatch => {
    setTimeout(() => {
      console.log('I got tracks');
      dispatch({type: 'FETCH_TRACKS_SUCCESS', payload: mockApiData})
    }, 2000);
};
