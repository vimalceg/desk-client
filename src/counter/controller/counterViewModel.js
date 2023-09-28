let isRed = (count) => (count % 2 ? "red" : "green");

export default function counterViewModel(counter, isLoading, error) {
  return {
    counter: counter,
    textColor: isRed(counter),
    isLoading,
    error,
  };
}
