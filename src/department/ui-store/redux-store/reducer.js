export default function reducer(state = null, action) {
  switch (action.type) {
    case 'SET_DEPARETMENT_ID':
      return action.data;
  }
  return state;
}
