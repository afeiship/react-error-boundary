import React from 'react';

export default class extends React.Component {
  handleClick() {
    console.log('click!');

    setTimeout(() => {
      throw new Error('I crashed (button)!');
    }, 1000);
  }

  render() {
    return <button onClick={this.handleClick}>ButtonClick</button>;
  }
}
