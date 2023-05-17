import Cart from './lab3';


const cart1 = Cart.getInstance()
cart1.addItem({"title": "Nike", "price": "80000", 'amount': 1})
cart1.addItem({"title": "Puma 12X", 'price': "5000", "amount": 1})
cart1.removeItem({"title": "Nike", "price": "80000", 'amount': 1})
cart1.getItems()
