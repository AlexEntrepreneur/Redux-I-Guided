import React from 'react';
import { connect } from 'react-redux';

import { slipOnBanana, watchNews, winLottery, addFriend } from '../actions/actions';

class Person extends React.Component {
  // Step-1: Plan your slices of state
  // Write down what slices of state your application will have.
  // state = {
  //   mentalHealth: 100,
  //   physicalHealth: 150,
  //   friends: []
  // }

  onFormSubmit = (event) => {
    event.preventDefault();
    const input = event.target['friend'];
    input.value !== '' && this.props.addFriend(input.value);
    input.value = '';
  }

  render() {
    return (
      <div>
        <h2>Mental Health: { this.props.mentalHealth }</h2>
        <h2>Physical Health: { this.props.physicalHealth }</h2>
        <h2>Friends:</h2>
        {
          this.props.friends.map((friend, index) => (
            <h4 key={index}>{friend}</h4>
          ))
        }
        <div>
          <button onClick={this.props.slipOnBanana}>SLIP ON BANANA PEEL</button>
          <button onClick={this.props.watchNews}>WATCH THE NEWS</button>
          <button onClick={this.props.winLottery}>WIN THE LOTTERY</button>
        </div>
        <form onSubmit={this.onFormSubmit}>
          <input name="friend" />
          <button type="submit">ADD FRIEND</button>
        </form>
      </div>
    );
  }
}
// Step-9: Map state to props
// Pass `mapStateToProps` function to `connect` [first argument]
const mapStateToProps = reducers => {
  return {
    mentalHealth: reducers.mentalHealth,
    physicalHealth: reducers.physicalHealth,
    friends: reducers.friends
  };
}

// Step-8: Connect React component
// Step-10: Pass our action creators to `connect` [second argument]
export default connect(
  mapStateToProps,
  { slipOnBanana, watchNews, winLottery, addFriend }
)(Person);