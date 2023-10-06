export default function controller(viewModel, NotifyService) {
  return {
    handleIncrement: () => counterService.handleIncrement(viewModel.counter),
    handleDecrement: () =>
      counterService.handleDecrement(viewModel.counter, NotifyService),
    handleOddIncrement: () =>
      counterService.handleOddIncrement(viewModel.counter),
  };
}
