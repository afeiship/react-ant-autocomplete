import noop from '@jswork/noop';
import classNames from 'classnames';
import React, { Component } from 'react';
import { AutoComplete } from 'antd';
import { AutoCompleteProps } from 'antd/es/auto-complete';
import debounce from 'debounce';

const CLASS_NAME = 'react-ant-autocomplete3';

interface EventTarget {
  target: {
    value: any;
  };
}

export type ReactAntAutocomplete3Props = Omit<AutoCompleteProps, 'onChange' | 'onSearch'> & {
  /**
   * The extended className for component.
   */
  className?: string;
  /**
   * The data source list.
   */
  items?: any[];
  /**
   * The change handler.
   */
  onChange?: (event: EventTarget) => void;
  /**
   * The handler when search.
   */
  onSearch?: (event: EventTarget) => void;
  /**
   * The debounce delay interval.
   */
  interval?: number;
};

export default class ReactAntAutocomplete3 extends Component<ReactAntAutocomplete3Props> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    interval: 100,
    onChange: noop,
    onSearch: noop
  };

  handleSearch = debounce((inEvent) => {
    const { onSearch } = this.props;
    onSearch!({
      target: { value: inEvent }
    });
  }, this.props.interval);

  handleChange = (inEvent) => {
    const { onChange } = this.props;
    onChange!({
      target: { value: inEvent }
    });
  };

  render() {
    const { className, onChange, onSearch, items, ...props } = this.props;

    return (
      <AutoComplete
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        dataSource={items}
        showSearch
        allowClear
        onSearch={this.handleSearch}
        onChange={this.handleChange}
        {...props}
      />
    );
  }
}
