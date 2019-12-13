import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';

const CLASS_NAME = 'react-error-boundary';

export default class extends Component {
  static displayName = CLASS_NAME;
  static propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.func
  };

  static defaultProps = {
    onChange: noop,
    error: ({ error, info }) => {
      return (
        <React.Fragment>
          <h2>Something went wrong:</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            <p>{error && error.toString()}</p>
            <p>{info.componentStack}</p>
          </details>
        </React.Fragment>
      )
    }
  };

  constructor(inProps) {
    super(inProps);
    this.state = { value: null };
  }

  componentDidCatch(error, info) {
    const { onChange } = this.props;
    const target = { value: { error, info } };
    this.setState(target, () => {
      onChange({ target });
    });
  }

  render() {
    const { className, error, children, ...props } = this.props;
    const { value } = this.state;
    if (value) {
      return (
        <div className={classNames(CLASS_NAME, className)} {...props}>
          {error(value)}
        </div>
      );
    }
    return children;
  }
}
