import { useSelector } from 'react-redux';
import counterViewModel from './counterViewModel';

export default function useCounterPresenter(counterService) {
  // let [isLoading, setLoading] = useState(true);
  let { counter,textColor } = useSelector(() => {
    let count = counterService.getCounter();
    return counterViewModel(count);
  });
  console.log("counter",counter)
  return {
    // isLoading,
    counter,
    textColor,
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
