import ReactToggle from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
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
      <div className="app-container">
        <ReactToggle value={value} onChange={this.handleChange} />
        <div className="is-code">
          <pre>
            <code>Value: {String(value)}</code>
          </pre>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
