import React from 'react';
import Theme from './Theme';

export default class TestComp1 extends React.PureComponent {
  UNSAFE_componentWillUpdate() {
    console.log('TestComp1 UNSAFE_componentWillUpdate');
  }
  render() {
    console.log('TestComp1 render');
    return (
      <div
        style={{
          width: 200,
          height: 200,
          backgroundColor: '#03a9f4',
        }}>
        TestComp1 xxx: {Theme.xxx}
      </div>
    );
  }
}
