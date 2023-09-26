import { useSelector } from 'react-redux';

export default function useCounterPresenter(counterService) {
  return useSelector(() => {
    return counterService.getCounter();
  });
}
