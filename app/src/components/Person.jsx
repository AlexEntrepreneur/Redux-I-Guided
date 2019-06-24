import React from 'react';
// import { connect } from 'react-redux';

class Person extends React.Component {
  // Step-1: Plan your slices of state
  // Write down what slices of state your application will have.
  state = {
    mentalHealth: 100,
    physicalHealth: 150,
  }

  render() {
    return (
      <div>
        <h2>Mental Health: { this.state.mentalHealth }</h2>
        <h2>Physical Health: { this.state.physicalHealth }</h2>
        <div>
          <button>SLIP ON BANANA PEEL</button>
          <button>WATCH THE NEWS</button>
          <button>WIN THE LOTTERY</button>
        </div>
      </div>
    );
  }
}

export default Person;