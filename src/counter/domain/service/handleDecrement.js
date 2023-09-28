export default (repo) => (count, NotifyService) => {
  if (count == 0) {
    NotifyService.onFailure({ errorMessage: "Counter should not less than 0" });
    return;
  }
  repo.handleDecrement(count - 1);
};
