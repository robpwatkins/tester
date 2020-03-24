import React from 'react';

class UserGreeting extends React.Component {
  state = {
    isLoggedIn: true,
  }

  render() {

    return (
      this.state.isLoggedIn ?
      <div>Sup Rob</div> :
      <div>Welcome esteemed guest</div>
    )
  }
}

export default UserGreeting;