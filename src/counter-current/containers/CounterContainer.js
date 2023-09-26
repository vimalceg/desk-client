import React from 'react';
import { connect } from 'react-redux';
import {
  handleIncrement,
  handleDecrement,
  handleOddIncrement,
  fetchCounter,
} from '../actions';
import Counter from '../components/Counter';
import getCounter from '../selectors/getCounter';
class CounterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }
  componentDidMount() {
    console.log('mount');
    this.props.fetchCounter().then(() => {
      this.setState({ isLoading: false });
    });
  }
  render() {
    let { counter, handleIncrement, handleDecrement, handleOddIncrement } =
      this.props;
    if (this.state.isLoading) {
      return <div>Loading UI</div>;
    }
    return (
      <Counter
        count={counter}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onOddIncrement={handleOddIncrement}
      />
    );
  }
}

export default connect(
  (state) => ({
    counter: getCounter(state),
  }),
  {
    handleIncrement,
    handleDecrement,
    handleOddIncrement,
    fetchCounter,
  }
)(CounterContainer);
