const React = require('react');
const ReactDOM = require('react-dom');
// require('./index.css');

export default class App extends React.Component {
  render() {
    return (
      <div>
        Hello World!
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#app')
);