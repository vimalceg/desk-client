function controller(service, viewModel) {
  return {
    fetchTickets: () => service.fetchTicketsAndsetTicketsInStore(),
  };
}
