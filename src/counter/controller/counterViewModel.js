let isRed = (count) => (count % 2 ? 'red' : 'green');

export default function counterViewModel(counter) {
  return {
    counter: counter,
    textColor: isRed(counter),
  };
}
