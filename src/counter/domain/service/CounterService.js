import handleIncrement from './handleIncrement';
import handleDecrement from './handleDecrement';
import handleOddIncrement from './handleOddIncrement';
import fetchCounter from './fetchCounter';
import getCounter from './getCounter';

export default function CounterService(repo) {
  return {
    handleIncrement: handleIncrement(repo),
    handleDecrement: handleDecrement(repo),
    handleOddIncrement: handleOddIncrement(repo),
    fetchCounter: fetchCounter(repo),
    getCounter: getCounter(repo),
  };
}
