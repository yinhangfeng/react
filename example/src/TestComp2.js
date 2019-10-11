import React from 'react';
import Theme from './Theme';

export default class TestComp2 extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  UNSAFE_componentWillUpdate() {
    console.log('TestComp2 UNSAFE_componentWillUpdate');
  }
  render() {
    console.log('TestComp2 render');
    return (
      <div
        style={{
          width: 200,
          height: 200,
          backgroundColor: '#00bcd4',
        }}>
        TestComp1 xxx: {Theme.xxx}
      </div>
    );
  }
}
