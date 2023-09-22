class SessionService {
  constructor(store) {
    this.sessionRepository = new SessionRepostiory(store);
  }
  createSession(session) {
    return repo.createSession(session);
  }
  createEmptySession() {
    return repo.createEmptySession();
  }
  getSession() {
    return repo.getSession();
  }
}
