# react-toggle
> Toggle component for react.

## installation
```shell
npm install -S @feizheng/react-toggle
```

## update
```shell
npm update @feizheng/react-toggle
```

## properties
| Name      | Type   | Default | Description                           |
| --------- | ------ | ------- | ------------------------------------- |
| className | string | -       | The extended className for component. |
| disabled  | bool   | false   | If onClick works.                     |
| value     | bool   | false   | Default value.                        |
| onChange  | func   | noop    | The change handler.                   |


## usage
1. import css
  ```scss
  @import "~@feizheng/react-toggle/dist/style.scss";

  // customize your styles:
  $react-toggle-options: ()
  ```
2. import js
  ```js
  import ReactToggle from '@feizheng/react-toggle';
  import ReactDOM from 'react-dom';
  import React from 'react';
  import './assets/style.scss';

  class App extends React.Component {
    componentDidMount() {}
    handleChange = (e) => {
      console.log(e.target.value);
    };
    render() {
      return (
        <div className="app-container">
          <ReactToggle onChange={this.handleChange} />
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-toggle/
