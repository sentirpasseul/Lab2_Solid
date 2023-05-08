// const enum PaymentMethodEnum {
//   Wifi = "Wifi",
//   Transfer = "Transfer",
//   Stripe = "Stripe",
// }
var Store = /** @class */ (function () {
    function Store(paymentMethod) {
        this.paymentMethod = paymentMethod;
        this.paymentMethod = paymentMethod;
        this._methods = new PaymentMethods(this.paymentMethod);
    }
    Store.prototype.sellItem = function () {
        this._methods.getPaymentMethod();
    };
    return Store;
}());
var PaymentMethods = /** @class */ (function () {
    function PaymentMethods(methodPayment) {
        this._methodPayment = methodPayment;
        this._stripe = new Stripe();
        this._wifi = new Wifi();
        this._transfer = new Transfer();
    }
    PaymentMethods.prototype.getPaymentMethod = function () {
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
    };
    return PaymentMethods;
}());
var Stripe = /** @class */ (function () {
    function Stripe() {
    }
    Stripe.prototype.processPayment = function () {
        console.log("Stripe Payment");
    };
    return Stripe;
}());
var Wifi = /** @class */ (function () {
    function Wifi() {
    }
    Wifi.prototype.processPayment = function () {
        console.log("Wifi Payment");
    };
    return Wifi;
}());
var Transfer = /** @class */ (function () {
    function Transfer() {
    }
    Transfer.prototype.processPayment = function () {
        console.log("Transfer Payment");
    };
    return Transfer;
}());
var method1 = String(prompt("Введите название метода"));
var testStore = new Store(method1);
testStore.sellItem();
