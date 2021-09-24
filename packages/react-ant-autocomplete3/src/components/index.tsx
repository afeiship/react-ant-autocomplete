import noop from '@jswork/noop';
import classNames from 'classnames';
import React, { Component } from 'react';
import filterProps from '@jswork/filter-react-props';
import { AutoComplete } from 'antd';
import debounce from 'debounce';

const CLASS_NAME = 'react-ant-autocomplete3';

export type ReactAntAutocomplete3Props = any & {
  /**
   * The extended className for component.
   */
  className?: string;
  /**
   * Default value.
   */
  value?: object;
  /**
   * The data source list.
   */
  items?: any[];
  /**
   * The change handler.
   */
  onChange?: (event: any) => void;
  onSearch?: (event: any) => void;
  onSelect?: (event: any) => void;
  /**
   * The debounce delay interval.
   */
  interval?: number;
  /**
   * The display list max size.
   */
  limit?: number;
};

export default class ReactAntAutocomplete3 extends Component<ReactAntAutocomplete3Props> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    value: null,
    interval: 100,
    limit: 100,
    onChange: noop,
    onSearch: noop
  };

  handleSelect = (e) => {
    console.log('click select!', e);
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
    const { className, value, onChange, items, ...props } = this.props;
    const theProps = filterProps(props);

    return (
      <AutoComplete
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        dataSource={items}
        showSearch
        allowClear
        onSelect={this.handleSelect}
        onSearch={this.handleSearch}
        onChange={this.handleChange}
        {...theProps}
      />
    );
  }
}
