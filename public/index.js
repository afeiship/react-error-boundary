import ReactErrorBoundary from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import BuggyComponent from './buggy-component';
import BuggyButton from './buggy-button';
import './assets/style.scss';


class App extends React.Component {
  onChange = inEvent => {
    console.log('error', inEvent);
  };

  render() {
    return (
      <div className="app-container">
        <ReactErrorBoundary onChange={this.onChange}>
          <BuggyComponent />
          <BuggyButton />
        </ReactErrorBoundary>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
