let initialState = [
  {
    id: "1",
    subject: "subject1",
    number: "123",
  },
];
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET":
      return action.data;
  }
  return state;
}
