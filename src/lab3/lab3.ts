interface Item {
    title: string;
    price: string;
    amount: number;
}

class Cart {
    public static _instance: Cart;
    private items: any;

    private constructor() {}

    public static getInstance(): Cart {
        return this._instance || (this._instance = new this());
    }

    public addItem(item: Item) {

    }

    public getItems() {
        return this.items
    }

    

}