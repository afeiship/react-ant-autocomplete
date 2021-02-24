import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactToggle from '../src/main';
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
