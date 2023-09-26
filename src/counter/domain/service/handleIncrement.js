export default handleIncrement = (repo) => (count) => {
  console.log('repo', repo);
  repo.handleIncrement(count + 1);
};
