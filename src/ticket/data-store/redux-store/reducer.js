let initialState = [];
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET":
      return action.data;
  }
  return state;
}
