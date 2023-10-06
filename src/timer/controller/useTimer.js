import { useEffect, useState } from "react";
import { useStore } from "react-redux";
import TimerService from "../domain/service/TimerService";
import TimerRepository from "../data-store/TimerRepository";
import timerStoreCreator from "../data-store/redux-store/TimerStore";

export default function useTimer() {
  let store = useStore();

  let timerRepository = TimerRepository(timerStoreCreator(store));
  let timerService = TimerService(timerRepository);
    
  return {
    ...timerService,
  };
}
