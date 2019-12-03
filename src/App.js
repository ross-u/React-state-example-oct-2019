import React from 'react';
import logo from './logo.svg';
import './App.css';
import User from './components/User';

// Example component of why "Initializing state from props is an Anti-Pattern"
// import UserInitializedFromProps from './components/UserInitializedFromProps';

class App extends React.Component {
  // Set initial state from props - ANTI PATTERN!
  // Only use case for using constructor is "initializing state from props"
  constructor(props) {
    super(props);

    this.state = {
      backColor: 'yellow',
      userA: {
        firstName: 'Harper',
        avatarUrl:
          'https://www.refreshmiami.com/wp-content/uploads/2018/07/55085_logo-ironhack.png',
      },
      userB: {
        firstName: 'Ana',
        avatarUrl:
          'https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png',
      },
      clickCount: this.props.initialCount,
    };
  }

  clickHandler = () => {
    const updatedCount = this.state.clickCount + 1;

    this.setState({ clickCount: updatedCount });

    // WRONG !
    // this.state.clickCount = updatedCount;
  };

  render() {
    return (
      <div className="App">
        <h1>React State and props</h1>
        <h3>Click Count: {this.state.clickCount}</h3>
        <button onClick={this.clickHandler}>Click me</button>
        {/* <button onClick={() => this.clickHandler('Hello')}>Click me</button> */}

        <User
          theColor={this.state.backColor}
          firstName={this.state.userA.firstName}
          image={this.state.userA.avatarUrl}
          clickCount={this.state.clickCount}
        />

        <User
          theColor={this.state.backColor}
          firstName={this.state.userB.firstName}
          image={this.state.userB.avatarUrl}
          clickCount={this.state.clickCount}
        />
      </div>
    );
  }
}

export default App;
