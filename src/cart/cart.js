import React, {Component} from 'react';
import './cart.css';
import DataService from '../services/data-service';

import ProductCondensed from '../product-condensed/product-condensed';

class ShoppingCart extends Component {

        constructor(props) {
            super(props);

            this.state ={shoppingCart:[
                {
                    title:"Raspberry Pi 3B+",
                    price:39.99,
                    _id:"190509"
            },

            {
                title:"Xbox one X",
                price:399.99,
                _id:"190504529"
        },

        {
            title:"PS4 Pro",
            price:299.99,
            _id:"190765509"
        }
            ]}

            //Bind functions
            this.createShoppingCart = this.createShoppingCart.bind(this);
        }

        createShoppingCart = () => {
            const cart = this.state.shoppingCart.map((product) => 
                <ProductCondensed product={product} key={product._id} />
            );

            return (cart);
        }

    render() {
        return ( 
            <div className="card">
            <div className="card-block">
            <h4 className="card-title"> Shopping Cart</h4>
            <ul className ="cart-group">
            {this.createShoppingCart()}
            </ul>
            </div>
            </div>
         );
        
    }
}

export default ShoppingCart;