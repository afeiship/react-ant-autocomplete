import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@jswork/noop';

const CLASS_NAME = 'react-toggle';

export default class ReactToggle extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * If onClick works.
     */
    disabled: PropTypes.bool,
    /**
     * Default value.
     */
    value: PropTypes.bool,
    /**
     * The change handler.
     */
    onChange: PropTypes.func
  };

  static defaultProps = {
    value: false,
    disabled: false,
    onChange: noop
  };

  static getDerivedStateFromProps(inProps, inState) {
    const { value } = inProps;
    if (value !== inState.value) {
      return { value };
    }
    return null;
  }

  state = {
    value: this.props.value
  };

  handleClick = () => {
    const { value } = this.state;
    const { onChange, disabled } = this.props;
    const target = { value: !value };
    if (disabled) return;
    this.setState(target, () => {
      onChange({ target });
    });
  };

  render() {
    const { className, value, onClick, ...props } = this.props;
    return (
      <span
        data-component={CLASS_NAME}
        data-value={this.state.value}
        className={classNames(CLASS_NAME, className)}
        onClick={this.handleClick}
        {...props}
      />
    );
  }
}
