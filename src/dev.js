import './dev.scss';
import ReactToggle from './main';

/*===example start===*/

// install: npm install afeiship/react-toggle --save
// import : import ReactToggle from 'react-toggle'

class App extends React.Component{
  state = {

  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  render(){
    return (
      <div className="hello-react-toggle">
      <ReactToggle>
        Toggle ME
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
