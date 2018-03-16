# react-toggle
> Toggle component for react.


## properties:
```javascript

  static propTypes = {
    className:PropTypes.string,
    value:PropTypes.bool,
    onChange:PropTypes.func,
  };

  static defaultProps = {
    value: false,
    onChange:noop,
  };
  
```

## usage:
```jsx

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

```

## customize style:
```scss
// customize your styles:
$react-toggle-options:(
);

@import '~node_modules/react-toggle/style.scss';
```
