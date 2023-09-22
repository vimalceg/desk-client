class SessionRepostiory {
  constructor(store) {
    this.store = store;
  }
  createSession(session) {
    return new Session.Builder().createSession(session).build();
  }
  createEmptySession() {
    return new Session.Builder().build();
  }
  getSession() {
    return this.store.getSession();
  }
}
