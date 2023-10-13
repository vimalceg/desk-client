// mock redux implementation in class pattern
class Store {
  constructor(state) {
    this.state = state;
    this.listener = [];
    this.dispatch({ type: "@store/init" });
  }
  reducer(state, action) {
    console.log("super class");
    return state;
  }
  dispatch(action) {
    this.log("before state", this.state);
    this.log("action", action);
    this.state = this.reducer(this.state, action);
    this.log("after state", this.state);
    let listerns = this.listener.slice();

    listerns.map((listener) => {
      listener();
    });
  }
  log(...arg) {
    console.log(...arg);
  }
  getState() {
    return this.state;
  }
  subscribe(cb) {
    let i = this.listener.push(cb);
    return () => {
      this.listener.splice(i, 1);
    };
  }
}

class AppStore extends Store {
  constructor(state) {
    super(state);
  }
  ticket(state = {}, action) {
    return state;
  }
  contact(state = {}, action) {
    return state;
  }
  reducer(state, action) {
    return {
      ticket: this.ticket(state.ticket, action),
      contact: this.contact(state.contact, action),
    };
  }
}

let appStore = new AppStore({ ticket: { 1: {} } });

let unSubscribe = appStore.subscribe(() => {
  console.log("subscribe", appStore.getState());
});
appStore.dispatch({ type: "increment" });
export default appStore;
