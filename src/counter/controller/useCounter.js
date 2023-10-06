import { useEffect } from "react";
import { useStore } from "react-redux";
import CounterService from "../domain/service/CounterService";
import CounterRepository from "../data-store/CounterRepository";
import CounterUIRepository from "../ui-store/CounterUIRepository";
import counterStoreCreator from "../data-store/redux-store/counterStore";
import counterUIStoreCreator from "../ui-store/redux-store/counterUIStore";
import useCounterPresenter from "./useCounterPresenter";
import controller from "./controller";

import TimerService from "../../timer/domain/service/TimerService";
import TimerRepository from "../../timer/data-store/TimerRepository";
import timerStoreCreator from "../../timer/data-store/redux-store/TimerStore";

export default function useCounter() {
  let store = useStore();

  let counterRepository = CounterRepository(counterStoreCreator(store));
  let counterService = CounterService(counterRepository);
  let counterUIRepository = CounterUIRepository(counterUIStoreCreator(store));

  let timerRepository = TimerRepository(timerStoreCreator(store));
  let timerService = TimerService(timerRepository);

  let { NotifyService, viewModel } = useCounterPresenter(
    counterService,
    counterUIRepository,
    timerService,
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
    ...controller(counterService, viewModel, NotifyService),
  };
}
