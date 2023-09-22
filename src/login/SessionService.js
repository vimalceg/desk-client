export default class SessionService {
  constructor(sessionRepository) {
    this.repo = sessionRepository;
  }
  createSession(session) {
    return this.repo.createSession(session);
  }
  createEmptySession() {
    return this.repo.createEmptySession();
  }
  getSession() {
    return this.repo.getSession();
  }
}
