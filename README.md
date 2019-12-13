# react-error-boundary
> ErrorBoundary component for react.

## installation
```shell
npm install -S @feizheng/react-error-boundary
```
## properties
| property  | type     | default | description              |
| --------- | -------- | ------- | ------------------------ |
| className | String   | -       | The extended classname   |
| error     | Function | -       | Error component replacer |
| onChange  | Function | -       | When error caught        |

## usage
1. import css
  ```scss
  @import "~@feizheng/react-error-boundary/dist/style.scss";

  // customize your styles:
  $react-error-boundary-options: ()
  ```
2. import js
  ```js
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
  ```

## documentation
- https://afeiship.github.io/react-error-boundary/

## resources
- http://react.html.cn/docs/error-boundaries.html
- https://codepen.io/gaearon/pen/wqvxGa?editors=0010
- https://juejin.im/post/5c00fc505188251d09201054
