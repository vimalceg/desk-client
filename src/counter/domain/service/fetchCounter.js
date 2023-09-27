export default (repo) =>
  ({ onSuccess, onError }) => {
    repo.fetchCounter().then(onSuccess, onError);
  };
