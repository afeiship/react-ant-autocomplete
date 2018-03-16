import React,{ Component } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

export default class extends Component{
  /*===properties start===*/
  static propTypes = {
    className:PropTypes.string,
    value:PropTypes.bool,
    onChange:PropTypes.func,
  };

  static defaultProps = {
    value: false,
    onChange:noop,
  };
  /*===properties end===*/

  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
  }

  componentWillReceiveProps(inProps){
    const { value } = inProps;
    if( value !== this.state.value ){
      this.setState({ value });
    }
  }

  _onClick = e => {
    const { value } = this.state;
    const { onChange } = this.props;
    const target = { value: !value };
    this.setState( target,()=>{
      onChange({ target });
    });
  };

  render(){
    const {className, value, onChange,...props} = this.props;
    return (
      <span {...props} data-active={this.state.value} onClick={this._onClick} className={classNames('react-toggle',className)} />
    );
  }
}
