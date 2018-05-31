import '@babel/polyfill';
// import './whyDidYouUpdate';
import React from 'react';
import ReactDOM from 'react-dom';
import ThemeContext from './ThemeContext';
import App from './App';

class Root extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      theme: {
        text: 'hello',
        color: '#2196f3',
      },
    };

    this._changeTheme = this._changeTheme.bind(this);
  }

  _changeTheme() {
    this.setState({
      theme: {
        ...this.state.theme,
        text: `hello${Math.random()}`,
      },
    });
  }

  render() {
    return (
      <ThemeContext.Provider
        value={this.state.theme}>
        <App
          changeTheme={this._changeTheme}
        />
      </ThemeContext.Provider>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
