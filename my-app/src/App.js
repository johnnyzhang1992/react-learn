import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// create a App component
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">小小梦工场</h1>
          <h1 className="App-title">学习 React 的第一步</h1>
            <p data-myattribute = "somevalue">这是一个很不错的 JavaScript 库!</p>
        </header>
        <p className="App-intro">
          你可以在 <code>src/App.js</code> 文件中修改 。
        </p>
      </div>
    );
  }
}

export default App;
