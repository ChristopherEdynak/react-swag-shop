import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Components

import Product from '../product/product';
import WishList from '../wishlist/wishlist';
import ShoppingCart from '../cart/cart';
import ProductCondensed from '../product-condensed/product-condensed';

//Services

import HttpService from '../services/http-service';

const http = new HttpService();

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {products:[]};
    // Bind functions
    this.loadData = this.loadData.bind(this);
    this.productList = this.productList.bind(this);

    this.loadData();
  }

  loadData = () => {
    let self = this;
    http.getProducts().then(data => {
      self.setState({products: data})
    }, err => {

    });
  }

  productList = () => {
    const list = this.state.products.map((product) => 
      <div className="col-sm-4" key={product._id}>
        <Product title={product.title} price={product.price} imgUrl={product.imgUrl}/>
      </div>
  
    );

  return (list);

  }

  render(){
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to the</h2>
        <h3>Swag Shop</h3> 
      </div>
      <p className="App-intro">
      Please check back regularly as we are constantly under construction
      </p>
      <div className="container-fluid App-main">
        <div className="row">
        <div className="col-sm-2">
        <WishList />
        </div>
        <div className="col-sm-8">
        <div className="row">
          {this.productList()}
        </div>
        </div>
        <div className="col-sm-2">
        <div className="row">
        <ShoppingCart />
        </div>
        </div>
        </div>
        </div>
        </div>
    
 
  );
}
}

export default App;
