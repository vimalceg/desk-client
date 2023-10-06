export default function controller(counterService,viewModel, NotifyService) {
  return {
    handleIncrement: () => counterService.handleIncrement(viewModel.counter),
    handleDecrement: () =>
      counterService.handleDecrement(viewModel.counter, NotifyService),
    handleOddIncrement: () =>
      counterService.handleOddIncrement(viewModel.counter),
  };
}
