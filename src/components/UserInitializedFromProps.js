import React from 'react';

class UserInitializedFromProps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.firstName,
      image: this.props.image,
      theColor: this.props.theColor,
      clickCount: this.props.clickCount,
    };
  }

  render() {
    return (
      <div style={{ backgroundColor: this.state.theColor }}>
        <h1> {this.state.clickCount} </h1>
        <h2>Hello, {this.state.firstName}</h2>

        <img src={this.state.image} alt="" width="250" height="250" />
      </div>
    );
  }
}

export default UserInitializedFromProps;
