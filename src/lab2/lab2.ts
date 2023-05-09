// const enum PaymentMethodEnum {
//   Wifi = "Wifi",
//   Transfer = "Transfer",
//   Stripe = "Stripe",
// }

interface IStore {
    sellItem: () => void;
  }
  
  class Store implements IStore {
    public _methods: PaymentMethods;
    constructor(public paymentMethod: string) {
      this.paymentMethod = paymentMethod;
      this._methods = new PaymentMethods(this.paymentMethod)
    }
    public sellItem(): void {
      this._methods.getPaymentMethod();
    }
  }
  
  class PaymentMethods {
    private _stripe: Stripe;
    private _wifi: Wifi;
    private _transfer: Transfer;
    public _methodPayment;
  
    constructor(methodPayment: string) {
      this._methodPayment = methodPayment;
      this._stripe = new Stripe();
      this._wifi = new Wifi();
      this._transfer = new Transfer();
    }
  
    public getPaymentMethod() {
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
    public processPayment(): void {
      console.log(`Stripe Payment`);
    }
  }
  
  class Wifi {
    public processPayment(): void {
      console.log(`Wifi Payment`);
    }
  }
  
  class Transfer {
    public processPayment(): void {
      console.log(`Transfer Payment`);
    }
  }
  
  const method1 = String(prompt("Введите название метода"))
  const testStore = new Store(method1);
  testStore.sellItem();
  