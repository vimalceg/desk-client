import { useSelector } from 'react-redux';
import counterViewModel from './counterViewModel';

export default function useCounterPresenter(counterService) {
  // let [isLoading, setLoading] = useState(true);
  let { counter } = useSelector(() => {
    let count = counterService.getCounter();
    console.log('count', count);
    return counterViewModel(count);
  });

  return {
    // isLoading,
    counter,
    NotifyService: {
      onSuccess: () => {
        // setLoading(false);
      },
      onFailure: () => {
        // setLoading(false);
      },
    },
  };
}
