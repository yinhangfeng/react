import React from 'react';
import Theme from './Theme';

function TestComp3() {
  console.log('TestComp3 render');
  return (
    <div
      style={{
        width: 200,
        height: 200,
        backgroundColor: '#009688',
      }}>
      TestComp1 xxx: {Theme.xxx}
    </div>
  );
}

export default TestComp3; // React.memo(TestComp3);
