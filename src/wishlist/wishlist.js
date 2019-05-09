import React, {Component} from 'react';
import './wishlist.css';

import ProductCondensed from '../product-condensed/product-condensed';

class WishList extends Component {

        constructor(props) {
            super(props);

            this.state ={wishList:[
                {
                    title:"Pizza",
                    price:19.99,
                    _id:"19050946754"
            },

            {
                title:"4k TV",
                price:2939.99,
                _id:"190519867509"
        },

        {
            title:"Nintendo Switch",
            price:299.99,
            _id:"1905014659009"
    }

        ]}
            //Bind functions
            this.createWishList = this.createWishList.bind(this);
        }

        createWishList = () => {
            const list = this.state.wishList.map((product) => 
                <ProductCondensed product={product} key={product._id} />
            );

            return (list);
        }
    render() {
        return ( 
            <div className="card">
            <div className="card-block">
            <h4 className="card-title">Wish List</h4>
            <ul className ="list-group">
                {this.createWishList()}
            </ul>
            </div>
            </div>
         );
        
    }
}

export default WishList;