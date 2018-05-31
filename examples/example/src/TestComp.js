import React, { createElement } from 'react';

export default class TestComp extends React.Component {
  constructor() {
    super();
    this.state = { test1: 1 };
  }

  componentDidMount() {
    const a = {
      a: 1,
    };
    const b = Object.assign({

    }, a);

    // this.__react_create_element = __react_create_element();
  }

  componentDidUpdate(prevProps, prevState) {
  }

  render() {
    return (
      <div a={1} {...this.props}>test_comp</div>
    );
  }
}