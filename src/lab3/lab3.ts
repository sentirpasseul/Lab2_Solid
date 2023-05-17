interface Item {
  title: string;
  price: string;
  amount: number;
}

export default class Cart {
  public static _instance: Cart;
  private items = [
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

  private constructor() {}

  public static getInstance(): Cart {
    return this._instance || (this._instance = new this());
  }
  public addItem(item: Item) {
    if (item.title in this.items) {
      item.amount += 1;
    } else {
      this.items.push(item);
    }
  }

  public removeItem(item: Item) {
    const index = this.items.indexOf(item)
    this.items.splice(index, 1)
  }

  public getItems() {
    return this.items;
  }
}
