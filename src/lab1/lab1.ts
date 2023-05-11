class Invoice {
  private invoicePrint: InvoicePrint;
  private senderEmail: SenderEmail;
  constructor(
    private customerID: number,
    private customerEmail: string,
    private customerName: string,
    private amount: number
  ) {
    this.customerID = customerID;
    this.customerEmail = customerEmail;
    this.customerName = customerName;
    this.amount = amount;
    this.senderEmail = new SenderEmail(this.customerEmail, this.amount);
    this.invoicePrint = new InvoicePrint(this.customerName, this.amount);
  }
}

class SenderEmail {
  constructor(private customerEmail: string, private amount: number) {
    this.customerEmail = customerEmail;
    this.amount = amount;
  }

  public sendEmailToCustomer() {
    console.log(
      "Отправка счета на почту " +
        this.customerEmail +
        "\n" +
        "Количество товара: " +
        this.amount
    );
  }
}

class InvoicePrint {
  constructor(private customerName: string, private amount: number) {
    this.customerName = customerName;
    this.amount = amount;
  }

  public printInvoice() {
    console.log(
      "Счёт для " +
        this.customerName +
        "\n" +
        "Количество товара:" +
        this.amount
    );
  }
}
