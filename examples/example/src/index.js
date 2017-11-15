import _ from 'lodash';
import './style.css';
import printMe from './print.js';
import { cube } from './math.js';

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = { test1: 1 };
  }

  componentDidMount() {
    console.log('App componentDidMount refs:', this.refs);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }

  render() {
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
        <div
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
        />
      </div>
    );
  }
}

class Test1 extends React.Component {
  render() {
    return this.props.children;
  }

  componentDidMount() {
    console.log('Test1 componentDidMount refs:', this.refs);
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
