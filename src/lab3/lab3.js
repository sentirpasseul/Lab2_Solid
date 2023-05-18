export default class Cart {
    constructor() {
        this.items = [
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
    }
    static getInstance() {
        return this._instance || (this._instance = new this());
    }
    addItem(item) {
        {
            this.items.map((item) => {
                if (item.title in this.items) {
                    item.amount += 1;
                }
                else {
                    this.items.push(item);
                }
            });
        }
    }
    removeItem(item) {
        const index = this.items.indexOf(item);
        this.items.splice(index, 1);
    }
    getItems() {
        return this.items;
    }
}
