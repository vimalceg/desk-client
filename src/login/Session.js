class Session {
  constructor() {
    this.accessType = null;
  }
  getAccessType() {
    return this.accessType;
  }
  setAccessType(accessType) {
    this.accessType = accessType;
  }
  static Builder = class {
    constructor() {
      this.sesion = new Session();
    }
    setAccessToken(token) {
      session.setAccessToken(token);
    }
    createSession(session) {
      return session;
    }
    build() {
      return session;
    }
  };
}
