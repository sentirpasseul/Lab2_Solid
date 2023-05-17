"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cart = /** @class */ (function () {
    function Cart() {
        this.items = [
            {
                title: "Macbook Air 13",
                price: "80000",
                amount: 1,
            },
            {
                title: "Macbook Pro 16",
                price: "180000",
                amount: 1,
            },
        ];
    }
    Cart.getInstance = function () {
        return this._instance || (this._instance = new this());
    };
    Cart.prototype.addItem = function (item) {
        var _this = this;
        {
            this.items.map(function (item) {
                if (item.title in _this.items) {
                    item.amount += 1;
                }
                else {
                    _this.items.push(item);
                }
            });
        }
    };
    Cart.prototype.removeItem = function (item) {
        var index = this.items.indexOf(item);
        this.items.splice(index, 1);
    };
    Cart.prototype.getItems = function () {
        return this.items;
    };
    return Cart;
}());
exports.default = Cart;
