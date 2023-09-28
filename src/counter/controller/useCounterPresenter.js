import { useSelector } from "react-redux";
import counterViewModel from "./counterViewModel";

export default function useCounterPresenter(
  counterService,
  counterUIRepository,
) {
  // let [isLoading, setLoading] = useState(true);
  let viewModel = useSelector(() => {
    let count = counterService.getCounter();
    let isLoading = counterUIRepository.hasLoading();
    let error = counterUIRepository.getError();
    return counterViewModel(count, isLoading, error);
  });

  return {
    // isLoading,
    viewModel,

    NotifyService: {
      onSuccess: () => {
        counterUIRepository.setLoading(false);
        // setLoading(false);
      },
      onFailure: (error) => {
        counterUIRepository.setLoading(false);
        if (error) {
          counterUIRepository.setError(error);
        }

        // setLoading(false);
      },
    },
  };
}
