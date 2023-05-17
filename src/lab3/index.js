"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.index = void 0;
var lab3_1 = require("./lab3");
function index() {
    var cart1 = lab3_1.default.getInstance();
    cart1.addItem({ "title": "Nike", "price": "80000", 'amount': 1 });
    cart1.addItem({ "title": "Puma 12X", 'price': "5000", "amount": 1 });
    cart1.removeItem({ "title": "Nike", "price": "80000", 'amount': 1 });
    cart1.getItems();
}
exports.index = index;
