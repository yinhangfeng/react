const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component {
    render() {
        return (
            <div ref="root">
                <h1>Hello React!</h1>
                <Test1>
                    <p ref="test_ref">test ref</p>
                </Test1>
            </div>
        );
    }

    componentDidMount() {
        console.log('App componentDidMount refs:', this.refs);
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

ReactDOM.render(, document.getElementById('root'));
