export default (repo) =>
  ({ onSuccess, onError }) => {
    repo.fetchTicketsAndsetTicketsInStore().then(onSuccess, onError);
  };
