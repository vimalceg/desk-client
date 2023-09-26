import { useSelector } from 'react-redux';
import counterViewModel from './counterViewModel';

export default function useCounterPresenter(counterService) {
  return useSelector(() => {
    let count = counterService.getCounter();
    console.log('count', count);
    return counterViewModel(count);
  });
}
