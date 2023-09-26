export default handleDecrement = (repo) => (count) => {
  repo.handleDecrement(count - 1);
};
