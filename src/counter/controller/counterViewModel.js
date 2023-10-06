let isRed = (count) => (count % 2 ? "red" : "green");
let isDisabled = (hasStart) => hasStart;
export default function counterViewModel(counter, isLoading, error, hasStart) {
  return {
    counter: counter,
    textColor: isRed(counter),
    isLoading,
    error,
    buttonDisabled: isDisabled(hasStart),
  };
}
