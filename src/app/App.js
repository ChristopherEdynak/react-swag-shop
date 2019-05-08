import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from '../product/product';

import HttpService from '../services/http-service';

const http = new HttpService();

class App extends Component {

  constructor(props) {
    super(props);

    // Bind functions
    this.loadData = this.loadData.bind(this);

    this.loadData();
  }

  loadData = () => {
    http.getProducts().then(products => {
      console.log(products);
    }, err => {

    })
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to</h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Swag Shop
        </a>
      </header>
      <div className="App-main">
          <Product />
        </div>
    </div>
  );
}
}

export default App;
