import React from 'react';
import { connect } from 'react-redux';
import { 
  slipOnBanana, 
  winLottery, 
  watchNews, 
  addFriend 
} from '../actions/actions';


class Person extends React.Component {
  // state = {
  //   mentalHealth: 100,
  //   physicalHealth: 150,
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
        <p></p>
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

const mapStateToProps = reducers => {
  return {
    mentalHealth: reducers.mentalHealth,
    physicalHealth: reducers.physicalHealth,
    friends: reducers.friends
  };
}

export default connect(
  mapStateToProps,
  { slipOnBanana, winLottery, watchNews, addFriend }
)(Person);