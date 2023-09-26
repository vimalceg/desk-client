import handleIncrement from './handleIncrement';
import handleDecrement from './handleDecrement';
import handleOddIncrement from './handleOddIncrement';
import getCounter from './getCounter';

export default function CounterService(repo) {
  return {
    handleIncrement: handleIncrement(repo),
    handleDecrement: handleDecrement(repo),
    handleOddIncrement: handleOddIncrement(repo),
    getCounter: getCounter(repo),
  };
}
