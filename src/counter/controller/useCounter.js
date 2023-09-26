import { useStore } from 'react-redux';
import CounterService from '../domain/service/CounterService';
import CounterRepository from '../data-store/CounterRepository';
import counterStoreCreator from '../data-store/redux-store/counterStore';
import useCounterPresenter from './useCounterPresenter';

export default function useCounter() {
  debugger;
  let store = useStore();
  let counterRepository = CounterRepository(counterStoreCreator(store));
  let counterService = CounterService(counterRepository);
  debugger;
  let counter = useCounterPresenter(counterService);
  // let actions = useCounterController(counterService);
  return {
    counter,
    ...counterService,
  };
}
