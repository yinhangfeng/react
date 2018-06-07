// import _ from 'lodash';
import './style.css';
// import printMe from './print.js';
import { cube } from './math';

import React, {
  Component,
  PureComponent,
  createElement,
} from 'react';
import ReactDOM from 'react-dom';
import test from './test';
import TestComp from './TestComp';
import ThemeContext from './ThemeContext';

export default class App extends Component {
  constructor() {
    super();
    this.state = { test1: 1 };
  }

  componentDidMount() {
    this.a = cube(1);
    console.log('App componentDidMount refs:', this.refs);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }

  render() {
    console.log('App render');
    return (
      <div>
        <h1>Hello React!{this.state.test1}</h1>
        <Test1>
          <p>test ref</p>
        </Test1>
        <button
          onClick={() => {
            console.log(this.state);
            setTimeout(() => {
              console.log(this.state);
              this.setState({ test1: this.state.test1 + 1 });
              console.log(this.state);
              this.setState({ test1: this.state.test1 + 1 });
              console.log(this.state);
            });
          }}
        >
          test1
        </button>
        <button
          onClick={() => {
            console.log('setState1 start');
            this.setState({}, () => {
              console.log('setState1 callback');
            });
            console.log('setState1 end');
            setTimeout(() => {
              this.setState({}, () => {
                console.log('setState2 callback');
              });
            });
          }}
        >
          testSetState
        </button>
        <button
          onClick={this.props.changeTheme}
        >
          changeTheme
        </button>
        <ThemeContext.Consumer>
          {(theme) => {
            console.log('ThemeContext.Consumer theme', theme);
            return (
              <div
                style={{
                  height: 100,
                  color: theme.color,
                }}
              >
                {theme.text}
              </div>
            );
          }}
        </ThemeContext.Consumer>
        {/* <div
          onStartShouldSetResponderCapture={e => {
            console.log('onStartShouldSetResponderCapture', e);
          }}
          onStartShouldSetResponder={e => {
            console.log('onStartShouldSetResponder', e);
            return true;
          }}
          onScrollShouldSetResponderCapture={e => {
            console.log('onScrollShouldSetResponderCapture', e);
          }}
          onScrollShouldSetResponder={e => {
            console.log('onScrollShouldSetResponder', e);
          }}
          onMoveShouldSetResponderCapture={e => {
            console.log('onMoveShouldSetResponderCapture', e);
          }}
          onMoveShouldSetResponder={e => {
            console.log('onMoveShouldSetResponder', e);
            return true;
          }}
          onResponderStart={e => {
            console.log('onResponderStart', e);
          }}
          onResponderMove={e => {
            console.log('onResponderMove', e);
          }}
          onResponderEnd={e => {
            console.log('onResponderEnd', e);
          }}
          onResponderRelease={e => {
            console.log('onResponderRelease', e);
          }}
          onResponderTerminationRequest={e => {
            console.log('onResponderTerminationRequest', e);
          }}
          onResponderGrant={e => {
            console.log('onResponderGrant', e);
          }}
          onResponderReject={e => {
            console.log('onResponderReject', e);
          }}
          onResponderTerminate={e => {
            console.log('onResponderTerminate', e);
          }}
          style={{ width: '100%', height: '300px', backgroundColor: '#99aa77' }}
        /> */}
        {/* {this._renderChildren()} */}
        <TestComp/>
      </div>
    );
  }

  _renderChildren() {
    // dev 模式下children 不给key
    // 1. children element 直接以参数形式给createElement 在dev 模式下 createElementWithValidation 中会被标记_store.validated = true
    // 2. children element 给createElement 的参数存在数组 在createElementWithValidation 会警告
    // 3. children 数组直接在props 中 createElementWithValidation 不会检查 在 ReactChildFiber.js warnForMissingKey 中会警告

    const c = createElement;
    return (
      <div>
        {c('div', {}, c('div'), c('div'))}
        {c('div', {}, [c('div'), c('div')])}
        {c('div', { children: [c('div'), c('div')] })}
      </div>
    );
  }
}

class Test1 extends Component {
  render() {
    return this.props.children;
  }

  componentDidMount() {
    console.log('Test1 componentDidMount refs:', this.refs);
  }
}
