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

interface QueryResult {
  items: any[];
  total: number;
}

interface TemplateArgs {
  item: any;
  index: number;
}

type OverrideProps = 'value' | 'onChange' | 'onSearch' | 'onSelect';

const DEFAULT_TEMPLATE = ({ item }) => {
  return item.label;
};

export type ReactAntAutocomplete3Props = Omit<AutoCompleteProps, OverrideProps> & {
  /**
   * The extended className for component.
   */
  className?: string;
  /**
   * The keyword.
   */
  value?: string;
  /**
   * The data source list.
   */
  items?: any[];
  /**
   * The item template.
   * @param args
   */
  template?: (args: TemplateArgs) => React.ReactNode;
  /**
   * The change handler.
   * @param event
   */
  onChange?: (event: EventTarget) => void;
  /**
   * The handler when search.
   * @param event
   */
  onSearch?: (event: EventTarget) => void;
  /**
   * The handler when select.
   * @param event
   */
  onSelect?: (event: EventTarget) => void;
  /**
   * The debounce delay interval.
   */
  interval?: number;
  /**
   * The api for query records.
   * @param keyword
   */
  query?: (keyword?: string) => Promise<QueryResult> | unknown;
};

export default class ReactAntAutocomplete3 extends Component<ReactAntAutocomplete3Props> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    value: '',
    items: [],
    template: DEFAULT_TEMPLATE,
    interval: 100,
    onChange: noop,
    onSearch: noop,
    onSelect: noop
  };

  private mounted = false;

  state = {
    value: this.props.value,
    items: this.props.items
  };

  private doQuery = () => {
    const { value } = this.state;
    const { query } = this.props;
    const kw = value || '';
    if (query) {
      // @ts-ignore
      return query(kw).then(({ items }) => {
        if (!this.mounted) return;
        this.setState({ items });
      });
    }
  };

  get items() {
    const { items } = this.state;
    const { template } = this.props;
    if (template) {
      return items!.map((item, index) => {
        return template({ item, index });
      });
    }
    return items;
  }

  componentDidMount() {
    this.mounted = true;
    this.doQuery();
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  handleSearch = debounce((inEvent) => {
    const { onSearch } = this.props;
    const value = inEvent;
    this.doQuery();
    onSearch!({ target: { value } });
  }, this.props.interval);

  handleChange = (inEvent) => {
    const { onChange } = this.props;
    const target = { value: inEvent };
    this.setState(target);
    onChange!({ target });
  };

  handleSelect = (inEvent) => {
    const { onSelect } = this.props;
    onSelect!({ target: { value: inEvent } });
  };

  render() {
    const { className, onChange, onSearch, onSelect, items, query, value, ...props } = this.props;
    const _value = this.state.value;
    return (
      <AutoComplete
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        value={_value}
        dataSource={this.items}
        showSearch
        allowClear
        onSearch={this.handleSearch}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
        {...props}
      />
    );
  }
}
