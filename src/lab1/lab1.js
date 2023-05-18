"use strict";
class Invoice {
    constructor(customerID, customerEmail, customerName, amount) {
        this.customerID = customerID;
        this.customerEmail = customerEmail;
        this.customerName = customerName;
        this.amount = amount;
        this.customerID = customerID;
        this.customerEmail = customerEmail;
        this.customerName = customerName;
        this.amount = amount;
        this.senderEmail = new SenderEmail(this.customerEmail, this.amount);
        this.invoicePrint = new InvoicePrint(this.customerName, this.amount);
    }
}
class SenderEmail {
    constructor(customerEmail, amount) {
        this.customerEmail = customerEmail;
        this.amount = amount;
        this.customerEmail = customerEmail;
        this.amount = amount;
    }
    sendEmailToCustomer() {
        console.log("Отправка счета на почту " +
            this.customerEmail +
            "\n" +
            "Количество товара: " +
            this.amount);
    }
}
class InvoicePrint {
    constructor(customerName, amount) {
        this.customerName = customerName;
        this.amount = amount;
        this.customerName = customerName;
        this.amount = amount;
    }
    printInvoice() {
        console.log("Счёт для " +
            this.customerName +
            "\n" +
            "Количество товара:" +
            this.amount);
    }
}
