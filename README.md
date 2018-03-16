# react-toggle
> Toggle component for react.


## properties:
```javascript

  static propTypes = {
    className:PropTypes.string,
    value:PropTypes.bool,
    disabled:PropTypes.bool,
    onChange:PropTypes.func,
  };

  static defaultProps = {
    value: false,
    disabled: false,
    onChange:noop,
  };
  
```

## usage:
```jsx

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

```

## customize style:
```scss
// customize your styles:
$react-toggle-options:(
);

@import '~node_modules/react-toggle/style.scss';
```
