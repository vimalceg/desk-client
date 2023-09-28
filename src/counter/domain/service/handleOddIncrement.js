export default (repo) => (count) => {
  if (count % 2 === 1) {
    repo.handleIncrement(count + 1);
  } else {
    console.log("count is even");
  }
};
