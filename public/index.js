import ReactToggle from '../src/main';
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
