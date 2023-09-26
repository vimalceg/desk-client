export default (repo) => (count) => {
  console.log('repo', repo);
  repo.handleIncrement(count + 1);
};
