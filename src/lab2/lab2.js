"use strict";
// const enum PaymentMethodEnum {
//   Wifi = "Wifi",
//   Transfer = "Transfer",
//   Stripe = "Stripe",
// }
class Store {
    constructor(paymentMethod) {
        this.paymentMethod = paymentMethod;
        this.paymentMethod = paymentMethod;
        this._methods = new PaymentMethods(this.paymentMethod);
    }
    sellItem() {
        this._methods.getPaymentMethod();
    }
}
class PaymentMethods {
    constructor(methodPayment) {
        this._methodPayment = methodPayment;
        this._stripe = new Stripe();
        this._wifi = new Wifi();
        this._transfer = new Transfer();
    }
    getPaymentMethod() {
        switch (this._methodPayment) {
            case "Wifi":
                this._wifi.processPayment();
                break;
            case "Stripe":
                this._stripe.processPayment();
                break;
            case "Transfer":
                this._transfer.processPayment();
                break;
        }
    }
}
class Stripe {
    processPayment() {
        console.log(`Stripe Payment`);
    }
}
class Wifi {
    processPayment() {
        console.log(`Wifi Payment`);
    }
}
class Transfer {
    processPayment() {
        console.log(`Transfer Payment`);
    }
}
const method1 = String(prompt("Введите название метода"));
const testStore = new Store(method1);
testStore.sellItem();
