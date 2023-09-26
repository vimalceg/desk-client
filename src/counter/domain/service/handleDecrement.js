export default (repo) => (count) => {
  repo.handleDecrement(count - 1);
};
