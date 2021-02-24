# react-toggle
> Toggle component for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-toggle
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| disabled  | bool   | false    | false   | If onClick works.                     |
| value     | bool   | false    | false   | Default value.                        |
| onChange  | func   | false    | noop    | The change handler.                   |


## usage
1. import css
  ```scss
  @import "~@jswork/react-toggle/dist/style.css";

  // or use sass
  @import "~@jswork/react-toggle/dist/style.scss";

  // customize your styles:
  $react-toggle-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactToggle from '@jswork/react-toggle';
  import './assets/style.scss';

  class App extends React.Component {
    state = {
      value: false
    };

    handleChange = (e) => {
      this.setState({ value: e.target.value });
    };

    render() {
      const { value } = this.state;

      return (
        <ReactDemokit
          className="p-3 app-container"
          url="https://github.com/afeiship/react-toggle">
          <ReactToggle value={value} onChange={this.handleChange}>
            Click Me
          </ReactToggle>
          <div className="is-code">
            <pre>
              <code>Value: {String(value)}</code>
            </pre>
          </div>
        </ReactDemokit>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-toggle/


## license
Code released under [the MIT license](https://github.com/afeiship/react-toggle/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-toggle
[version-url]: https://npmjs.org/package/@jswork/react-toggle

[license-image]: https://img.shields.io/npm/l/@jswork/react-toggle
[license-url]: https://github.com/afeiship/react-toggle/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-toggle
[size-url]: https://github.com/afeiship/react-toggle/blob/master/dist/react-toggle.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-toggle
[download-url]: https://www.npmjs.com/package/@jswork/react-toggle
