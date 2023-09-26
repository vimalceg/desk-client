export default class SessionRepostiory {
  constructor(store) {
    this.store = store;
  }
  createSession(session) {
    return this.store.setUserSession(session);
  }
  getSession() {
    return this.store.getSession();
  }
}
