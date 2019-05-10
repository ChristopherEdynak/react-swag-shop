
let instance = null;
var wishList =[];
var shoppingCart =[];

class DataService {
    constructor(){
        if (!instance) {
            instance = this;
        }

        return instance;
    }

    addWishListItem = item => {
        wishList.push(item);
    }

    removeWishListItem = item => {
        for (var x = 0; x < wishList.length; x++) {
            if(wishList[x]._id === item._id) {
                wishList.splice(x,1);
                break;
            }
        }
    }

    addShoppingCartItem = item => {
        shoppingCart.push(item);
    }

    removeShoppingCartItem = item => {
        for (var x = 0; x < shoppingCart.length; x++) {
            if(shoppingCart[x]._id === item._id) {
                shoppingCart.splice(x,1);
                break;
            }
        }
    }
}