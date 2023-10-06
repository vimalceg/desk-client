import { useEffect, useState } from "react";
import { useStore, useSelector } from "react-redux";
import TimerService from "../domain/service/TimerService";
import TimerRepository from "../data-store/TimerRepository";
import timerStoreCreator from "../data-store/redux-store/TimerStore";
import counterStoreCreator from "../../counter/data-store/redux-store/counterStore";
import CounterRepository from "../../counter/data-store/CounterRepository";
import CounterService from "../../counter/domain/service/CounterService";

export default function useTimer() {
  let store = useStore();
  let counterRepository = CounterRepository(counterStoreCreator(store));
  let counterService = CounterService(counterRepository);

  let timerRepository = TimerRepository(timerStoreCreator(store));
  let timerService = TimerService(timerRepository, counterService);

  let { time, hasStart } = useSelector(() => {
    return timerService.getTimer();
  });

  return {
    onStart: timerService.start,
    onStop: timerService.stop,
    time,
    hasStart,
  };
}
