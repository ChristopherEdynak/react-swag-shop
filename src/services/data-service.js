import NotificationService, {NOTIF_WISHLIST_CHANGED, NOTIF_SHOPPINGCART_CHANGED} from './notification-service';

let ns = new NotificationService();

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
        ns.postNotification(NOTIF_WISHLIST_CHANGED, wishList);
    }

    removeWishListItem = item => {
        for (var x = 0; x < wishList.length; x++) {
            if(wishList[x]._id === item._id) {
                wishList.splice(x,1);
                ns.postNotification(NOTIF_WISHLIST_CHANGED, wishList);
                break;
            }
        }
    }

    addShoppingCartItem = item => {
        shoppingCart.push(item);
        ns.postNotification(NOTIF_SHOPPINGCART_CHANGED, shoppingCart);
    }

    removeShoppingCartItem = item => {
        for (var x = 0; x < shoppingCart.length; x++) {
            if(shoppingCart[x]._id === item._id) {
                shoppingCart.splice(x,1);
                ns.postNotification(NOTIF_SHOPPINGCART_CHANGED, shoppingCart);
                break;
            }
        }
    }
}
export default DataService;