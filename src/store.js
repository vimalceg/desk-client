class Store {
  constructor(reducer, state) {
    this.state = state;
    this.reducer = reducer;
    this.listener = [];
  }
  dispatch(action) {
    this.state = this.reducer(this.state, action);
  }
  subscribe(cb) {
    let i = this.listener.push(cb);
    return () => {
      this.listener.splice(i, 1);
    };
  }
  getState() {
    return state;
  }
}

let reducer = (state, action) => {
  return state;
};
let store = new Store(reducer, 10);
