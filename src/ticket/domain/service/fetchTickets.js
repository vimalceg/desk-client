export default (repo) =>
  ({ departmentId }, { onSuccess, onError }) => {
    repo
      .fetchTicketsAndsetTicketsInStore({ departmentId })
      .then(onSuccess, onError);
  };
