import './dev.scss';
import ReactToggle from './main';

/*===example start===*/

// install: npm install afeiship/react-toggle --save
// import : import ReactToggle from 'react-toggle'

class App extends React.Component{
  state = {
    value: false
  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  _onChange = e =>{
    const { value } = e.target;
    this.setState({ value });
    console.log(value);
  };

  render(){
    return (
      <div className="hello-react-toggle">
      <ReactToggle value={this.state.value} onChange={this._onChange}>
        Toggle ME - { this.state.value + '' }
      </ReactToggle>
      <hr/>
      <ReactToggle disabled onChange={this._onChange}>
        Toggle ME- I was disabled.
      </ReactToggle>
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
