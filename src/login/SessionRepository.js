export default class SessionRepostiory {
  constructor(store) {
    this.store = store;
  }
  createSession(session) {
    return this.store.setUserSession(session);
  }
  createEmptySession() {
    return new Session.Builder().build();
  }
  getSession() {
    return this.store.getSession();
  }
}
