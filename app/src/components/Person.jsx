import React from 'react';
import { connect } from 'react-redux';

import { slipOnBanana, watchNews, winLottery } from '../actions/actions';

class Person extends React.Component {
  // Step-1: Plan your slices of state
  // Write down what slices of state your application will have.
  // state = {
  //   mentalHealth: 100,
  //   physicalHealth: 150,
  // }

  render() {
    return (
      <div>
        <h2>Mental Health: { this.props.mentalHealth }</h2>
        <h2>Physical Health: { this.props.physicalHealth }</h2>
        <div>
          <button onClick={this.props.slipOnBanana}>SLIP ON BANANA PEEL</button>
          <button onClick={this.props.watchNews}>WATCH THE NEWS</button>
          <button onClick={this.props.winLottery}>WIN THE LOTTERY</button>
        </div>
      </div>
    );
  }
}
// Step-9: Map state to props
// Pass `mapStateToProps` function to `connect` [first argument]
const mapStateToProps = reducers => {
  return {
    mentalHealth: reducers.mentalHealth,
    physicalHealth: reducers.physicalHealth
  };
}

// Step-8: Connect React component
// Step-10: Pass our action creators to `connect` [second argument]
export default connect(
  mapStateToProps,
  { slipOnBanana, watchNews, winLottery }
)(Person);