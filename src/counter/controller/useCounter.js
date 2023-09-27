import { useEffect, useState } from 'react';
import { useStore } from 'react-redux';
import CounterService from '../domain/service/CounterService';
import CounterRepository from '../data-store/CounterRepository';
import counterStoreCreator from '../data-store/redux-store/counterStore';
import useCounterPresenter from './useCounterPresenter';

export default function useCounter() {
  let store = useStore();

  let counterRepository = CounterRepository(counterStoreCreator(store));
  let counterService = CounterService(counterRepository);
  let { counter, textColor, isLoading, NotifyService } =
    useCounterPresenter(counterService);
  // let actions = useCounterController(counterService);
  useEffect(() => {
    // setLoading(true);
    counterService.fetchCounter(NotifyService);

    return () => {
      console.log('unmount');
    };
  }, []);
  return {
    isLoading,
    textColor,
    counter,
    ...counterService,
  };
}
