import handleIncrement from './handleIncrement';

export default function handleOddIncrement(count) {
  if (count % 2 === 1) {
    handleIncrement(count + 1);
  } else {
    console.log('count is even');
  }
}
