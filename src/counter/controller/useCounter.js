import { useEffect } from "react";
import { useStore } from "react-redux";
import CounterService from "../domain/service/CounterService";
import CounterRepository from "../data-store/CounterRepository";
import CounterUIRepository from "../ui-store/CounterUIRepository";
import counterStoreCreator from "../data-store/redux-store/counterStore";
import counterUIStoreCreator from "../ui-store/redux-store/counterUIStore";
import useCounterPresenter from "./useCounterPresenter";
import controller from "./controller";

export default function useCounter() {
  let store = useStore();

  let counterRepository = CounterRepository(counterStoreCreator(store));
  let counterService = CounterService(counterRepository);
  let counterUIRepository = CounterUIRepository(counterUIStoreCreator(store));

  let { NotifyService, viewModel } = useCounterPresenter(
    counterService,
    counterUIRepository,
  );
  useEffect(() => {
    counterUIRepository.setLoading(true);
    counterService.fetchCounter(NotifyService);
    return () => {
      console.log("unmount");
    };
  }, []);
  return {
    ...viewModel,
    ...controller(viewModel, NotifyService),
  };
}
