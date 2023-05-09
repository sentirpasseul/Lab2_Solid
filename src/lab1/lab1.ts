class Invoice {
    private _customer: Customer
    constructor(
        private invoiceID: number,
        public customer: Customer
    ) {
        this._customer = new Customer(1, "2")
    }
    public printInvoice() {
        console.log()
    }
}

class Customer {
    constructor(
        protected customerID: number,
        protected customerEmail: string
    ) {
        this.customerID = customerID;
        this.customerEmail = customerEmail;
    }

}

class SenderEmail {
    private customer = Customer;
    
    constructor(
    ) {
        
    }

    public sendEmailToCustomer() {

    }
}

const customerID = Number(prompt('Введите ID покупателя:'))
const customerEmail = String(prompt('Введите Email покупателя:'))
const customer1 = new Customer(customerID, customerEmail)