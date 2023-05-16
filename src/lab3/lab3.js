var Cart = /** @class */ (function () {
    function Cart() {
        this.items = [];
        this.item = new Item("Title", "1234");
    }
    Cart.getInstance = function () {
        return this._instance || (this._instance = new this());
    };
    Cart.prototype.addItem = function (item) {
        this.items.push(item);
        console.log(this.items);
    };
    return Cart;
}());
var Item = /** @class */ (function () {
    function Item(title, price) {
        this.title = title;
        this.price = price;
        this.title = title;
        this.price = price;
    }
    return Item;
}());
