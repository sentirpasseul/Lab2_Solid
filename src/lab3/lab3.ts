class Cart {
    public static _instance: Cart;
    private constructor() {
        
    }

    public static getInstance() {
        return this._instance || (this._instance = new this());
    }

    

}