export default function CounterUIRepository(store) {
  function setLoading(isLoading) {
    return store.setLoading(isLoading);
  }
  function setError(error) {
    return store.setError(error);
  }
  function hasLoading() {
    return store.hasLoading();
  }
  function getError() {
    debugger;
    return store.getError();
  }
  return {
    setLoading,
    hasLoading,
    getError,
    setError,
  };
}
